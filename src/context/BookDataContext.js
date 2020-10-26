import React, { useState, createContext } from "react";
import uuid from "uuid/v1";
export const BookDataContext = createContext();

const BookDataContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      title: "She Drives Me Crazy",
      author: "Kelly Quindlen",
      imgUrl:
        "https://i0.wp.com/www.booklistreader.com/wp-content/uploads/2020/09/She-Drives-Me-Crazy-Quindlen.jpg",
      price: 500,
      id: 1,
    },
    {
      title: "The Summer of Everything",
      author: "Julian Winters",
      imgUrl:
        "https://i2.wp.com/www.booklistreader.com/wp-content/uploads/2020/09/The-Summer-of-Everything-Winters.jpg",
      price: 700,
      id: 2,
    },
    {
      title: "Can’t Even: How Millennials Became the Burnout Generation",
      author: "Anne Helen Petersen",
      imgUrl:
        "https://i2.wp.com/www.booklistreader.com/wp-content/uploads/2020/09/Can%E2%80%99t-Even-Petersen.jpg",
      price: 300,
      id: 3,
    },
  ]);

  const addBook = (title, author, price, imgUrl) => {
    setBooks([...books, { title, author, price, imgUrl, id: uuid() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookDataContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookDataContext.Provider>
  );
};

export default BookDataContextProvider;
