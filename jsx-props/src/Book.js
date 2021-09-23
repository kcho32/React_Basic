import React, { Component } from 'react';

class Book extends Component {
  render() {
    const {isbn, title, author} = this.props;
    return (
      <div>
        <span>제목 : {title}</span><br/>
        <span>저자 : {author}</span><br/>
        <span>ISBN : {isbn}</span>
      </div>
    );
  }
}

export default Book;