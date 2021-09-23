import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';


// 부모 component인 BookList로부터 받은 props book 데이터 출력
class BookItem extends Component {
  render() {
    const {book, onSelect} = this.props;
    return (
      <div>
        <Item onClick={()=>onSelect(book, onSelect)}>
          <Item.Image size='tiny' src={book.imgUrl}/>
          <Item.Content>
            <Item.Header as='a'>{book.title} </Item.Header> 
            <Item.Meta>{book.price}</Item.Meta>
            <Item.Extra>{book.author}</Item.Extra>
          </Item.Content>
        </Item>
      </div>
    );
  }
}

export default BookItem;