import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import jwt from "jsonwebtoken";
import { devNull } from "os";
import { start } from "repl";

// 4 parms -> params args context info

let users = [
  {
    id: 1,
    name: "Yaman",
    email: "yaman@gmail.com",
    phone: 1234567890,
    password: 123
  },
  {
    id: 2,
    name: "Ritik",
    email: "ritik@example.com",
    phone: 1234567890,
  },
  {
    id: 3,
    name: "verma",
    email: "verma@example.com",
    phone: 1234567890,
  },
];

let blogs = [
  {
    id: 1,
    title: "Blog-1",
    description: "My first Blog",
    date: "12-03-2026",
  },
  {
    id: 2,
    title: "Blog-2",
    description: "My second Blog",
    date: "13-03-2026",
  },
];

const typeDefs = `
#graphql
  type addpostResponse{
    message: String, 
    data:Blog
  }
    type loginResponse{
      message: String,
      token: String
    }

type User {
  id: ID!
  name: String
  email: String
  phone: Int
}

type Blog {
  id: ID!
  title: String
  description: String
  date: String
}

type Query {
  getUsers: [User]
  getOneUser(_id: ID!): User
  getBlogs: [Blog]
  getBlogByID(_id: ID!): Blog
}

type Mutation {

  # User Mutation
  addUser(id: ID!, name: String, email: String, phone: Int): User
  deleteUser(id: ID!): [User]
  updateUser(id: ID!, name: String, email: String, phone: Int): User

  # Blog Mutation
  addBlog(id: ID!, title: String, description: String, date: String): [Blog]
  deleteBlog(id: ID!): [Blog]
  updateBlog(id: ID!, title: String, description: String, date: String): Blog

  # Login Mutation
  login(email: String!, password: String!): loginResponse
  addPost(id: ID!, title: String, description: String, date: String): addpostResponse
}
`;

const resolvers = {
  Query: {
    getUsers: () => users,

    getOneUser: (_, args) => {
      return users.find((u) => u.id == args._id);
    },

    getBlogs: () => blogs,

    getBlogByID: (_, args) => {
      return blogs.find((b) => b.id == args._id);
    },
  },

  Mutation: {
    login:(parent, args) => {
      /***
       * {email, password} = args;
       * if email exists
       *  -No -> please register
       *  -Yes
       *      --check password correct
       *      -- > No wrong password
       *      --> yes => create token and return 
       */

      const {email, password} = args;

      const user = users.find((u) => u.email == email);

      if(!user){
        return {message : "No user Exist"};
      }
      else if(user.password != password){
        return {message : "Wrong password"}
      }
      let token = jwt.sign({id: user.id, email: user.email}, "secretkey")
      return {message : "Login successful", token: token};
    },
    // User Mutations
    addUser: (_, args) => {
      const { id, name, email, phone } = args;

      const newUser = { id, name, email, phone };
      users.push(newUser);

      return newUser;
    },

    deleteUser: (_, args) => {
      const { id } = args;
      users = users.filter((u) => u.id != id);
      return users;
    },

    updateUser: (_, args) => {
      const { id, name, email, phone } = args;

      const user = users.find((u) => u.id == id);

      if (user) {
        user.name = name;
        user.email = email;
        user.phone = phone;
      }

      return user;
    },

    // Blog Mutations
    addBlog: (_, args, context) => {
      let {userId} = context;
      if(!userId) return {
        message: context.message,
        data: null
      }
      let{postId, likes, content} = args;
      posts.push({postId: postId, likes: likes, content: content, userId: userId});
      return {
        message: "Post added successfully",
        data: posts[posts.length - 1]
      }
      // const { id, title, description, date } = args;

      // const newBlog = { id, title, description, date };
      // blogs.push(newBlog);

      // return blogs;
    },

    deleteBlog: (_, args) => {
      const { id } = args;
      blogs = blogs.filter((b) => b.id != id);
      return blogs;
    },

    updateBlog: (_, args) => {
      const { id, title, description, date } = args;

      const blog = blogs.find((b) => b.id == id);

      if (blog) {
        blog.title = title;
        blog.description = description;
        blog.date = date;
      }

      return blog;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { 
  listen: { port: 4000 }, 
  context: ({ req }) => {
    let token = req.headers.authorization;

    if (!token) {
      return { message: "user not logged in", userId: null };
    }

    try {
      let decoded = jwt.verify(token, "secretkey");

      if (decoded) {
        return { message: "user logged in", userId: decoded.id };
      }

      return { message: "invalid token", userId: null };
    } catch (err) {
      return { message: "invalid token", userId: null };
    }
  }
});
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });


console.log(`Server ready at: ${url}`);