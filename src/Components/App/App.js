import React, { useState, useEffect } from 'react';
import CreateBook from '../CreateBook/CreateBook';
import FilterBar from '../FilterBar/FilterBar';
import SearchResults from '../SearchResults/SearchResults';
import CreateList from '../CreateList/CreateList';
import BookManager from '../../util/BookManager'
import PaginationLinks from '../Pagination/Pagination'
import ListOfLists from '../ListOfLists/ListOfLists'
import {Container, Box, Typography} from '@material-ui/core'
import { flexbox } from '@material-ui/system';

const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5);
    const [listName, setListName] = useState('New List Name');
    const [listBooks, setListBooks] = useState([]);
    const [listOfLists, setlistOfLists] = useState([]);
    const [tagsList, setTagsList] = useState([]);

 const onCreateBook = (book) => {
    BookManager.createBook(book).then(book => {
      let updateSearch = searchResults.slice();
      updateSearch.unshift(book)
      setSearchResults(updateSearch);
    });
  }
  
  const addTag = (books) => {
    let updateTags = tagsList.slice()
    let tags = books.map(element=>{
      return element.tags
    });
    tags = tags.join(",").replace(/\s/g, '').split(",")
    tags.forEach(tag => {
      if ( updateTags.indexOf(tag) === -1 ){
        updateTags.push(tag)
      }
    })
    setTagsList(updateTags);
  }

  const onCreateList = () => {
    let booksToList = listBooks.map(element => {
      return element.id
    })
    console.log(booksToList)
    BookManager.createList(listName, booksToList.join(',')).then(list => {
      let updateLists = listOfLists.slice();
      updateLists.unshift(list)
      setlistOfLists(updateLists);
      setListName('New List Name');
      setListBooks([]);

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
  
  const onFilterTag = (tag) => {
    BookManager.getBooks().then(books => {
      if(tag===null){
        console.log('is null')
        setSearchResults(books)   
      } else {
        let filterByTag = books.filter((book) => {
          let tagString = book.tags.replace(/\s/g, '').split(",");
          return tagString.indexOf(tag)!==-1 
        });
        setSearchResults(filterByTag)
      }
    })
  };

  const getBooks = () => {
    BookManager.getBooks().then(books => {
      if (books.length) {
        addTag(books)
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

  const onEditBook = (book, newBook) => {
    BookManager.updateBook({...book, ...newBook}).then((book)=>{
      console.log(book)
      let updateSearch = searchResults.slice()
      console.log(updateSearch)
      for (let x in updateSearch){
        console.log(updateSearch[x])
        if (updateSearch[x].id === book.id){
          updateSearch[x] = book
        }
      }
      setSearchResults(updateSearch);
    })
  }

  useEffect(() => {
    const fetchData = () => {
      getBooks()
      getLists()
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      searchResults.forEach((book) => {
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
    <Container>
    <Typography variant="h1" component="h2">
      Book Manager
    </Typography>
      <Container>
        <Container>
          <CreateBook
            onCreateBook={onCreateBook}/>
          <FilterBar
          tagsList={tagsList}
          onFilterTag={onFilterTag}
          />
        </Container>
        <div style={{ width: '100%' }}>
          <Box display="flex" flexDirection="row" p={1} m={1} justifyContent="center">
            <Container p={1}>
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
            </Container>
            <Container p={1}>
              <CreateList
                listName={listName}
                onNameChange={updateListName}
                onCreateList={onCreateList}
                createListBooks={listBooks}
                onAddBook={onAddBook}
                onSave={onCreateList}
              />
            </Container>
          </Box>
        </div>
        <ListOfLists
          lists={listOfLists}
          onDelete={onDeleteList}
          onFilter={onFilterList}
        />
      </Container>
    </Container>
    ); 
}

export default App;
