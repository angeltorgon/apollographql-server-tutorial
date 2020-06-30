const { ApolloServer, gql } = require('apollo-server');

const authors = [
    {
        id: 0,
        name: "George",
        email: "geroge@mail.com"
    },
    {
        id: 1,
        name: "Sam",
        email: "sam@mail.com"
    },
    {
        id: 2,
        name: "Estella",
        email: "estella@mail.com"
    },
]

const books = [
    {
        id: 0,
        name: "Some Cool Title",
        authorId: 0
    },
    {
        id: 1,
        name: "Title of Cool Book",
        authorId: 0
    },
    {
        id: 2,
        name: "Another Cool Book",
        authorId: 1
    },
    {
        id: 3,
        name: "Some Book",
        authorId: 1
    },
    {
        id: 4,
        name: "Thinking Of A Title",
        authorId: 2
    },
    {
        id: 5,
        name: "Another Cool Title",
        authorId: 2
    },
]

const typeDefs = gql`
    type Query {
        authors: [Author]
    }

    type Author {
        id: Int!
        name: String
        email: String
        books: [Book]
    }

    type Book {
        id: Int!
        name: String
        author: String
    }
`;

const resolvers = {
    Query: {
        authors: () => authors
    }
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen({port: 9000})
.then((serverInfo) => console.log(`Server running at ${serverInfo.url}`));