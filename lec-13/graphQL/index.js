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
`

const resolvers = {
    Query: {
        getUsers: () => {
            return users;
        },
        //in resolver we haev 4 arguments --> parents, args, 
        // context, info --> optional // args are objects which contains all the input ==> getOneUser(name, email, id)
        getOneUser: (_, args) => {
            return users.find(user => user.id == args.id);
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