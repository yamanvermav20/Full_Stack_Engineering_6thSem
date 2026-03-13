import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { get } from 'http';

let users = [
    {
        id: 1,
        name: 'Yaman Verma',
        email: 'yaman.verma@example.com',
        phone: 1223232112
    },
    {
        id: 2,
        name: 'Ritik',
        email: 'ritik@example.com',
        phone: 1244443210
    },
    {
        id: 3,
        name: 'Ritik',
        email: 'ritik@example.com',
        phone: 1244443210
    }
]

const typeDefs = `
  #user ==> comment

    type User{
        id: ID!,
        name: String,
        email: String,
        phone: Int
    }

    type Query{
        getUsers: [User],
        getOneUser(id: ID!): User
    }

    #Mutation
    type Mutation{
        addUser(id:ID!, name:String, email:String, phone:Int): User

        #Mutation to delete user
        deleteUser(id: ID!) : [User]

        updateUser(id: ID!, name:String, email:String, phone:Int): User
    }
    
    
`

const resolvers = {
    Query: {
        getUsers: () => {
            return users;
        },
        //in resolver we haev 4 arguments --> parents, args,context, info --> optional // args are objects which contains all the input ==> getOneUser(name, email, id)
        getOneUser: (_, args) => {
            return users.find(user => user.id == args.id);
        }
    },
    Mutation:{
        addUser:(_, args) => {
            //args --> id, name, email, phone
            let {id, name, email, phone} = args;  //destructuring
            //logic to add this new user to database;
            let newUser = {
                id: id, 
                name: name,
                email: email,
                phone: phone
            }
            users.push(newUser);
            return newUser;
        },
        deleteUser: (_, args) => {
            let {id} = args;  //Destructuring
            users = users.filter(user => user.id != id);
            return users;
        },
        updateUser: (_, args) => {
            let {id, name, email, phone} = args;
            let updateUser = users.find((u) => u.id == id);
            updateUser.name = name;
            updateUser.email = email;
            updateUser.phone = phone;
            return updateUser;
        }
    }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);