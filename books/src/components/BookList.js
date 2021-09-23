import React, { Component } from 'react';
import BookItem from './BookItem'
import { Item } from 'semantic-ui-react'

//부모 component App에서 받은 books를 목록으로 출력하도록 rendering.
class BookList extends Component {
  render() {
    const {books, onSelect} = this.props;
    const bookList = books.map(book => {
      return (
        <BookItem key={book.ISBM} book={book} onSelect={onSelect}/>
      )
    })
    // const listItem = books.map(book => {
    //     return (
    //       <li><BookItem key={book.ISBM} book={book}/></li>
    //     )
    // })
    return (
      <div>
        <Item.Group>
          {bookList}
        </Item.Group>
      </div>
    );
  }
}

export default BookList;