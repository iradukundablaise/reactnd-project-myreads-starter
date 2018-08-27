import React from 'react';
import {Shelf} from './Shelf';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const Home = ({currentlyReading, wantToRead, read, onShelfChange}) => {
    const BOOKSHELVES = [
        {title: "Currently Reading", id: "currentlyReading", books: currentlyReading},
        {title: "Want to Read", id: "wantToRead", books: wantToRead},
        {title: "Read", id: "read", books: read}
    ]

    return (
        <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                {BOOKSHELVES.map((shelf) => {
                    return <Shelf 
                    key={shelf.id}
                    shelfTitle={shelf.title}
                    books={shelf.books}
                    onShelfChange={onShelfChange} />
                })}
            </div>
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
        </div>
    )
}

Home.propTypes = {
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}