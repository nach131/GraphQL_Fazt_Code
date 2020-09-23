import { books } from '../data/books'
import {author} from '../data/authors'
  
export const resolvers = {
  Query: {
    book() {
      return books
    }, 
    authors() {
      return author
    }
  },
}