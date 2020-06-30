const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({typeDefs, resolvers});

server.listen({port: 9000})
.then((serverInfo) => console.log(`Server running at ${serverInfo.url}`));