import { GET_BOOKS } from "./type";
// import { getBooks } from "./actionBooks";

const initialStateBooks = {
  books: []
}

const booksReducer = (state = initialStateBooks, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: state.books
      }


    default:
      return state
  }
}

export default booksReducer;
