export const typeDefs = `
type Query {
  book: [Book]!
  author : [Author!]!
}
 type Book {
   id: ID!
   title: String!
   author: Author!
 }
 type Author {
  id: ID!
  name: String!
  books: [Book!]
}

`