import React, { Component } from 'react';


// 부모 component인 BookList로부터 받은 props book 데이터 출력
class CommentList extends Component {
  render() {
    const {book} = this.props;
    return (
      <div>
        <img src={book.imgUrl} alt={book.title}/>
        제목 : {book.title}
        가격 : {book.price}
        저자 : {book.author}
      </div>
    );
  }
}

export default BookItem;