const { ApolloServer, gql } = require('apollo-server');

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];
const bookExtra = [
    {
      title: 'sdsssssssssssss Potter and the Chamber of Secrets',
      author: 'sdsddg',
      age : 33
    },
    {
      title: 'Jsdsdk',
      author: 'Micsds xcxcrichton',
      age:40
    },
  ];

const number  = {number : Math.floor(Math.random() * 10)}
console.log(number)


// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }
  type BookExtra {
    title: String
    author: String
    age: Int
  }

  type Number {
    number : Int
  }

  type Query {
    books: [Book],
    bookExtra : [BookExtra],
    randomNumber : Number,
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    bookExtra : () => bookExtra,
    randomNumber : () => number,
  },
};


const server = new ApolloServer({ typeDefs, resolvers });



server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});