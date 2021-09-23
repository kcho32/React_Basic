import {makeAutoObservable} from 'mobx';
import Books from '../Books';

class BookStore {
  book = Books[0];
  books = Books;
  // book;
  // books;
  
  constructor() {
    makeAutoObservable(this);
  }

  // constructor(book, books) {
  //   makeObservable(this, {
  //     book: observable,
  //     books: observable,
  //     selectedBook: action,

  //   });
  //   this.book = book;
  //   this.books = books;
  // }

  action
  selectedBook = (book)=> {
    this.book = book;
  }

}

export default new BookStore();
// export default new BookStore(Books[0], Books)