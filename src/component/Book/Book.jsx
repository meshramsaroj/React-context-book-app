import React from 'react';
import "./Book.style.css"

const Book = ({ book, theme,removeBook }) => {
    return (
        <div className="book-card" style={{ background: theme.ui }} key={book.id}>
            <div className="card-header" >
                {book.title}
            </div>
            <div className="card-body" >
                <img src={book.imgUrl || "https://www.jstor.org/assets/collection-view_20191022T1233/build/images/cover_not_available.png"} alt="book-url" />
                <span>Price : {book.price}/Rs</span>
            </div>
            <div className="card-footer">
                <p>Written By : {book.author}</p>
                <button className="delete-btn" onClick={()=>removeBook(book.id)}>Delete</button>
            </div>

        </div>
    );
}

export default Book;