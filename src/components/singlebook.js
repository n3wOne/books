import React from 'react';

const SingleBook = ({author, book, genre}) =>
    <tr className="book">
                <td>{author}</td>
                <td>{book}</td>
                <td>{genre}</td>
    </tr>;

export default SingleBook;