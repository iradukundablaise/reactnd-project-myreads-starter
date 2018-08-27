import React from "react";
import '../App.css';
import {ShelfChanger} from './ShelfChanger';
import PropTypes from 'prop-types';

export const Book = ({book, onShelfChange}) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ 
        width: 128, height: 193, 
        backgroundImage: `url(${book.imageLinks? book.imageLinks.smallThumbnail: ''})`
        }}>
      </div>
      <ShelfChanger 
        defaultValue={book.shelf}
        onShelfChange={(value) => {onShelfChange(book, value)}} />
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors}</div>
  </div>
)

Book.propTypes = {
  onShelfChange: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
}