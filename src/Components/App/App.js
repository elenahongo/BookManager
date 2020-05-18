import React, { useState, useEffect } from 'react';
import './App.css';
import CreateBook from '../CreateBook/CreateBook';
import FilterBar from '../FilterBar/FilterBar';
import SearchResults from '../SearchResults/SearchResults';
import CreateList from '../CreateList/CreateList';
import BookManager from '../../util/BookManager'
import PaginationLinks from '../Pagination/Pagination'
import ListOfLists from '../ListOfLists/ListOfLists'

const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5);
    const [listName, setListName] = useState('New List Name');
    const [listBooks, setListBooks] = useState([]);
    const [listOfLists, setlistOfLists] = useState([]);

 const onCreateBook = (book) => {
    BookManager.createBook(book).then(book => {
      let updateSearch = searchResults.slice();
      updateSearch.unshift(book)
      setSearchResults(updateSearch);
    });
  }
 
  const onCreateList = () => {
    let booksToList = listBooks.map(element => {
      return element.id
    })
    console.log(booksToList)
    BookManager.createList(listName, booksToList.join(',')).then(list => {
      let updateLists = listOfLists.slice();
      updateLists.unshift(list.title)
      setlistOfLists(updateLists);
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

  const onDeleteList = (id) => {
    BookManager.deleteList(id).then(()=>{
      let updateListofLists = listOfLists.filter(listListed => {
        return listListed.id !== id;
      });
        setlistOfLists(updateListofLists)
    })
  };
  
  const onFilterList = (id) => {
    BookManager.getBooks().then(books => {
    let filterByList = listOfLists.filter(listListed => {
      return listListed.id === id;
    });
    let booksToShow = filterByList[0].books.split(',').map((value)=>{
      return parseInt(value, 10)})
    let updateSearch = books.filter(bookResulted => {
      return booksToShow.find(element => element === bookResulted.id);
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
 
  const getLists = () => {
    BookManager.getLists().then(lists => {
      if (lists.length) {
        setlistOfLists(lists);
      }
    });
  }

  const onEditBook = (book) => {
    console.log(book)
  }

  useEffect(() => {
    getBooks()
    getLists()
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
    let trackBookList = false;
    listBooks.forEach(bookListTrack => {
      if (bookListTrack.id === Number(id)) {
        trackBookList = true;
        }
      }
    );
    if(!trackBookList){
      let updateList = listBooks.slice()
      searchResults.map(book => {
        if (book.id===Number(id)){
          if(updateList){
          updateList.unshift(book)    
          }
        }
      })
      setListBooks(updateList)
    }
  }

  const updateListName = (name) => {
    setListName(name);
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
          listName={listName}
          onNameChange={updateListName}
          onCreateList={onCreateList}
          createListBooks={listBooks}
          onAddBook={onAddBook}
          onSave={onCreateList}
        />
        <ListOfLists
          lists={listOfLists}
          onDelete={onDeleteList}
          onFilter={onFilterList}
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
