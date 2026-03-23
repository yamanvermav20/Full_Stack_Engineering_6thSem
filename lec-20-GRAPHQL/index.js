import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';  

const books = [
    {title: "chemistry by yaman"},
    {title: "physics by ritik"},
    {title: "maths by verma"}
]

const authors = [
    {
        name: "yaman"
    },
    {
        name: "ritik"
    },
    {
        name: "verma"
    }
]

const typeDefs = `#
    union SearchResult = Book | Author
    
    type Book {
        title: String!
    }

    type Author {
        name: String!
    }
    type Query {
        search(contains: String): [SearchResult!]
    }
`;

const resolvers = {
   SearchResult: {
        __resolveType(obj, contextValue, info){
        // Only Author has a name field
        if(obj.name){
            return 'Author';
        }
        // Only Book has a title field
        if(obj.title){
            return 'Book';
        }
        return null; // GraphQLError is thrown
        }
    },
    Query: {
        search: (parent, args, context, info) => {
            const { contains } = args;
            // const words = contains.split(" ");

            const bookResults = books.filter(book =>  book.title.includes(contains));
            const authorResults = authors.filter(author => author.name.includes(contains));
            return [...bookResults, ...authorResults]; 
        }
    }
};



const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(` Server ready at: ${url}`);