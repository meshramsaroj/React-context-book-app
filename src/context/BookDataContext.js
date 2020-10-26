import React, { useReducer, createContext, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";
export const BookDataContext = createContext();

const BookDataContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookDataContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookDataContext.Provider>
  );
};

export default BookDataContextProvider;
