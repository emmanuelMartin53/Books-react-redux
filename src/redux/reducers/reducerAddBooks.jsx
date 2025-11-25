import { ADD_BOOKS, DELETE_BOOK, DELETE_ALL_BOOKS } from "../constants";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: JSON.parse(localStorage.getItem("booksData")) || []
};

const helperAddData = (action) => ({
  id: uuidv4(),
  title: action.payload.title,
  author: action.payload.author
});

const removeDataById = (books, id) => {
  return books.filter((book) => book.id !== id);
};

const reducerAddBooks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS: {
      const newBook = helperAddData(action);
      const updatedBooks = [...state.books, newBook];

      localStorage.setItem("booksData", JSON.stringify(updatedBooks));

      return {
        ...state,
        books: updatedBooks
      };
    }

    case DELETE_BOOK: {
      const updatedBooks = removeDataById(state.books, action.payload);

      localStorage.setItem("booksData", JSON.stringify(updatedBooks));

      return {
        ...state,
        books: updatedBooks
      };
    }

    case DELETE_ALL_BOOKS:

    localStorage.removeItem("booksData");
    return {
      ...state,
      books: []
    }


    default:
      return state;
  }
};

export default reducerAddBooks;
