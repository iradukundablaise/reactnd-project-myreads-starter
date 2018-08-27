import React from "react";
import '../App.css';
import {BookGrid} from './BookGrid';
import PropTypes from 'prop-types';

export const ShelfBook = ({books, onShelfChange}) => (
  <div className="bookshelf-books">
    <BookGrid 
      books={books}
      onShelfChange={onShelfChange} />
  </div>
)

ShelfBook.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}