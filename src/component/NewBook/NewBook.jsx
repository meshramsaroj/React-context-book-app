import React, { useState, useContext } from 'react';
import "./NewBook.style.css";
import { BookDataContext } from '../../context/BookDataContext';

const NewBook = () => {
    const { dispatch } = useContext(BookDataContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, author, price, imgUrl);
        dispatch({ type: "ADD_BOOK", book: { title, author, price, imgUrl } });
        setTitle('');
        setAuthor('');
        setImgUrl('');
        setPrice('');

    }
    return (
        <div className="new-book">
            <h3>Create Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Book Name/ Title:</label>
                <input type="text" placeholder="Enter Book Name" value={title} onChange={e => setTitle(e.target.value)} required />
                <label>Author Name:</label>
                <input type="text" placeholder="Enter Author NAme" value={author} onChange={e => setAuthor(e.target.value)} required />
                <label>Book Price:</label>
                <input type="number" placeholder="Enter Book Price" value={price} onChange={e => setPrice(e.target.value)} required />
                <label>Image Url:</label>
                <input type="text" placeholder="Image Url (Optional)" value={imgUrl} onChange={e => setImgUrl(e.target.value)} />
                <input type="submit" value="Add Book" />
            </form>
        </div>
    );
}

export default NewBook;