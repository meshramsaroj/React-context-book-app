import React, { useContext } from "react";
import "../Booklist/Booklist.style.css"
import { ThemeContext } from "../../context/themeContext";
import NewBook from "../NewBook/NewBook";
import Book from "../Book/Book";
import freeTimeImage from "../../assets/hello-free-time.gif"
import { BookDataContext } from "../../context/BookDataContext";

const Booklists = () => {
  const { dark, isLightTheme, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookDataContext);

  return books.length ? (
    <div className="booklists" style={{ background: theme.bg, color: theme.syntax }}>
      <h1>Book List</h1>
      <p>Currntly you have <strong> {books.length} </strong> books to get through</p>
      <div className="outer">
        {
          books.map(book => (
            <Book book={book} theme={theme} key={book.id} />
          ))
        }
      </div>
      <NewBook />
    </div>
  ) : (
      <div className="empty" style={{ background: theme.bg, color: theme.syntax }}>
        <p> No Books to read. Hello free time...</p>
        <img src={freeTimeImage} width="200" height="250" alt="free_image" />
        <NewBook />
      </div>
    );
}


export default Booklists;
