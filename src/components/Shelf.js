import React from "react";
import '../App.css';
import {ShelfBook} from './ShelfBook';
import PropTypes from 'prop-types';

export const Shelf = ({books, shelfTitle, onShelfChange}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfTitle}</h2>
      <ShelfBook 
        books={books} 
        onShelfChange={onShelfChange} />
  </div>
)

Shelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}