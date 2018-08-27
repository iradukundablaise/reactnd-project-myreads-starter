import React from 'react'
import {Book} from './Book';
import PropTypes from 'prop-types'
import '../App.css';

export const BookGrid = ({books, onShelfChange}) => (
  <ol className="books-grid">
    {books.map((book) => (
      <li key={book.id}>
        <Book 
          book={book} 
          onShelfChange={onShelfChange} />
      </li>
    ))}
  </ol>
)

BookGrid.propTypes = {
  onShelfChange: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
}