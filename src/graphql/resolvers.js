import { books } from '../data/books'
import { authors } from '../data/authors'

export const resolvers = {
  Query: {
    book() {
      return books
    },
    author() {
      return authors
    }
  },
  Book: {
    author(parent) {
      return authors.find(author => {

        return author.id === parent.author;
      });
    }
  },
 Author: {
    books(parent) {
      return books.filter(book => {
        return book.author === parent.id;
      });
    }
  }
}