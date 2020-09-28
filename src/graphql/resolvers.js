import { books } from '../data/books'
import {authors} from '../data/authors'
  
export const resolvers = {
  Query: {
    book() {
      return books
    }, 
    author() {
      return authors
    }
  },
}