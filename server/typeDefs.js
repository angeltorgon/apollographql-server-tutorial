const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        authors: [Author]
        books: [Book]
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
        author: Author
    }
`;

module.exports = typeDefs