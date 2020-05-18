import React from 'react';
import './App.css';
import CreateBook from '../CreateBook/CreateBook';
import FilterBar from '../FilterBar/FilterBar';
import SearchResults from '../SearchResults/SearchResults';
import CreateList from '../CreateList/CreateList';
import BookManager from '../../util/BookManager'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      listName: 'New Playlist Name',
      listBooks: [],
    };
    this.onCreateBook = this.onCreateBook.bind('this')
    this.onEditBook = this.onEditBook.bind('this')
    this.onDeleteBook = this.onDeleteBook.bind('this')
  }

  onCreateBook (book) {
      BookManager.createBook(book).then(book => {
        console.log(book)
      });
  }

  onDeleteBook (book) {
    console.log(book)
  };

  onEditBook (book) {
    console.log(book)
  }

  componentDidMount(){
    BookManager.getBooks().then(books => {
      if (books.length) {
        this.setState({searchResults: books});
      }
    });
  }


  render () {
    return (
    <div>
      <h1>Book Manager</h1>
      <div>
        <CreateBook
          onCreateBook={this.onCreateBook}/>
        <SearchResults
          books={this.state.searchResults}
          onEdit={this.onEditBook}
          onDelete={this.onDeleteBook}
        />

          {/* <div>
            <FilterBar/>
            <div class="App-playlist">
              <SearchResults/>
              <CreateList/>
            </div>
          </div> */}
      </div>
    </div>
    );
  }
}

export default App;
