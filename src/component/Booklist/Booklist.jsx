import React, { useContext } from "react";
import "../Booklist/Booklist.style.css"
import { ThemeContext } from "../../context/themeContext";
import { BookDataContext } from "../../context/BookDataContext";
import NewBook from "../NewBook/NewBook";
import Book from "../Book/Book";
import freeTimeImage from "../../assets/hello-free-time.gif"

// class Booklists extends Component {
//   // static contextType = ThemeContext;
//   render() {
//     // console.log(this.context);

//     return (
//       <ThemeContext.Consumer>{(context) => {
//         const { dark, isLightTheme, light } = context;
//         const theme = isLightTheme ? light : dark;
//         return (
//           <div className="booklists" style={{ background: theme.bg, color: theme.syntax }}>
//             <h1>Book List</h1>
//             <ul>
//               <li style={{ background: theme.ui }}> She Drives Me Crazy,</li>
//               <li style={{ background: theme.ui }}>The Summer of Everything</li>
//               <li style={{ background: theme.ui }}> Can’t Even: How Millennials Became the Burnout Generation</li>
//             </ul>
//           </div>
//         )
//       }}

//       </ThemeContext.Consumer>

//     );
//   }
// }

const Booklists = () => {
  const { dark, isLightTheme, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books, addBook, removeBook } = useContext(BookDataContext);

  return books.length ? (
    <div className="booklists" style={{ background: theme.bg, color: theme.syntax }}>
      <h1>Book List</h1>
      <p>Currntly you have <strong> {books.length} </strong> books to get through</p>
      <div className="outer">
        {
          books.map(book => (
            <Book book={book} theme={theme} key={book.id} removeBook={removeBook} />
          ))
        }
      </div>
      <NewBook addBook={addBook} />
    </div>
  ) : (
      <div className="empty" style={{ background: theme.bg, color: theme.syntax }}>
        <p> No Books to read. Hello free time...</p>
        <img src={freeTimeImage} width="200" height="250" alt="free_image" />
        <NewBook addBook={addBook} />
      </div>
    );
}


export default Booklists;
