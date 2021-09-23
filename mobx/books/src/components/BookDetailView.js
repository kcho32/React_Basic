import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class BookDetailView extends Component {
  render() {
    const {book, onSelect} = this.props;
    return (
        <Card>
          <Image src={book.imgUrl} alt={book.title} /><br/>
          <Card.Header>{book.title}</Card.Header>
          <Card.Meta>
            <span>{book.author}</span>
            <span>{book.price}</span>
            <span>{book.publisher}</span>
          </Card.Meta>
          <Card.Description>
            {book.introduce}
          </Card.Description>
        </Card>
    );
  }
}

export default BookDetailView;