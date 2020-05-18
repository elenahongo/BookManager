import React, { useState, useEffect } from 'react';
import './App.css';
import CreateBook from '../CreateBook/CreateBook';
import FilterBar from '../FilterBar/FilterBar';
import SearchResults from '../SearchResults/SearchResults';
import CreateList from '../CreateList/CreateList';
import BookManager from '../../util/BookManager'
import PaginationLinks from '../Pagination/Pagination'

const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5);
    const [listName, setListName] = useState('New List Name');
    const [listBooks, setListBooks] = useState([]);

 const onCreateBook = (book) => {
    BookManager.createBook(book).then(book => {
      let updateSearch = searchResults.slice();
      updateSearch.unshift(book)
      setSearchResults(updateSearch);
    });
  }

 const onDeleteBook = (id) => {
    BookManager.deleteBook(id).then(()=>{
      let updateSearch = searchResults.filter(bookResulted => {
        return bookResulted.id !== id;
      });
      setSearchResults(updateSearch);
    })
  };

  const getBooks = () => {
    BookManager.getBooks().then(books => {
      if (books.length) {
        setSearchResults(books);
      }
    });
  }

  const onEditBook = (book) => {
    console.log(book)
  }

  useEffect(() => {
    getBooks()
  }, []);
    
  //Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage
  const currentBooks = searchResults.slice(indexOfFirstBook, indexOfLastBook);

  //Change page
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
    }

  //Drag and Drop
    const onAddBook = (id) => {
      let updateList = listBooks.slice()
      searchResults.map(book => {
        if (book.id===Number(id)){
          if(updateList){
          updateList.push(book)    
          }
        }
      })
      setListBooks(updateList)
    }

    return (
    <div>
      <h1>Book Manager</h1>
      <div>
        <CreateBook
          onCreateBook={onCreateBook}/>
        <SearchResults
          books={currentBooks}
          onEdit={onEditBook}
          onDelete={onDeleteBook}
        />
        <PaginationLinks 
          booksPerPage={booksPerPage} 
          totalBooks={searchResults.length}
          paginate={paginate}
        />
        <CreateList
          createListBooks={listBooks}
          onAddBook={onAddBook}
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

export default App;
