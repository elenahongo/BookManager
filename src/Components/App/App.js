import React, { useState, useEffect } from "react";
import CreateBook from "../CreateBook/CreateBook";
import FilterBar from "../FilterBar/FilterBar";
import SearchResults from "../SearchResults/SearchResults.js";
import CreateList from "../CreateList/CreateList";
import BookManager from "../../util/BookManager";
import PaginationLinks from "../Pagination/Pagination";
import ListOfLists from "../ListOfLists/ListOfLists";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  filter: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
    [theme.breakpoints.between("sm", "md")]: {
      display: "block",
    },
  },
  subContainer: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.between("sm", "md")]: {
      display: "block",
    },
  },
  marginAutoItem: {
    margin: "auto",
  },
}));

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);
  const [listName, setListName] = useState("");
  const [listBooks, setListBooks] = useState([]);
  const [listOfLists, setlistOfLists] = useState([]);
  const [tagsList, setTagsList] = useState([]);

  const classes = useStyles();

  const onCreateBook = (book) => {
    BookManager.createBook(book).then((book) => {
      let updateSearch = searchResults.slice();
      updateSearch.unshift(book);
      setSearchResults(updateSearch);
    });
  };

  const addTag = (books) => {
    let updateTags = tagsList.slice();
    let tags = books.map((element) => {
      return element.tags;
    });
    tags = tags.join(",").replace(/\s/g, "").split(",");
    tags.forEach((tag) => {
      if (updateTags.indexOf(tag) === -1) {
        updateTags.push(tag);
      }
    });
    setTagsList(updateTags);
  };

  const onCreateList = () => {
    if (listBooks.length !== 0 && listName.length !== 0) {
      let booksToList = listBooks.map((element) => {
        return element.id;
      });
      console.log(booksToList);
      BookManager.createList(listName, booksToList.join(",")).then((list) => {
        let updateLists = listOfLists.slice();
        updateLists.unshift(list);
        setlistOfLists(updateLists);
        setListName("");
        setListBooks([]);
      });
    } else {
      return;
    }
  };

  const onDeleteBook = (id) => {
    BookManager.deleteBook(id).then(() => {
      let updateSearch = searchResults.filter((bookResulted) => {
        return bookResulted.id !== id;
      });
      setSearchResults(updateSearch);
    });
  };

  const onDeleteList = (id) => {
    BookManager.deleteList(id).then(() => {
      let updateListofLists = listOfLists.filter((listListed) => {
        return listListed.id !== id;
      });
      setlistOfLists(updateListofLists);
    });
  };

  const onFilterList = (id) => {
    BookManager.getBooks().then((books) => {
      let filterByList = listOfLists.filter((listListed) => {
        return listListed.id === id;
      });
      let booksToShow = filterByList[0].books.split(",").map((value) => {
        return parseInt(value, 10);
      });
      let updateSearch = books.filter((bookResulted) => {
        return booksToShow.find((element) => element === bookResulted.id);
      });
      setSearchResults(updateSearch);
    });
  };

  const onFilterTag = (tag) => {
    BookManager.getBooks().then((books) => {
      if (tag === null) {
        console.log("is null");
        setSearchResults(books);
      } else {
        let filterByTag = books.filter((book) => {
          let tagString = book.tags.replace(/\s/g, "").split(",");
          return tagString.indexOf(tag) !== -1;
        });
        setSearchResults(filterByTag);
      }
    });
  };

  const getBooks = () => {
    BookManager.getBooks().then((books) => {
      if (books.length) {
        addTag(books);
        setSearchResults(books);
      }
    });
  };

  const getLists = () => {
    BookManager.getLists().then((lists) => {
      if (lists.length) {
        setlistOfLists(lists);
      }
    });
  };

  const onEditBook = (book, newBook) => {
    BookManager.updateBook({ ...book, ...newBook }).then((book) => {
      console.log(book);
      let updateSearch = searchResults.slice();
      console.log(updateSearch);
      for (let x in updateSearch) {
        console.log(updateSearch[x]);
        if (updateSearch[x].id === book.id) {
          updateSearch[x] = book;
        }
      }
      setSearchResults(updateSearch);
    });
  };

  useEffect(() => {
    const fetchData = () => {
      getBooks();
      getLists();
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = searchResults.slice(indexOfFirstBook, indexOfLastBook);

  //Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Drag and Drop
  const onAddBook = (id) => {
    let trackBookList = false;
    listBooks.forEach((bookListTrack) => {
      if (bookListTrack.id === Number(id)) {
        trackBookList = true;
      }
    });
    if (!trackBookList) {
      let updateList = listBooks.slice();
      searchResults.forEach((book) => {
        if (book.id === Number(id)) {
          if (updateList) {
            updateList.unshift(book);
          }
        }
      });
      setListBooks(updateList);
    }
  };

  const updateListName = (name) => {
    setListName(name);
  };

  return (
    <Container>
      <Container className={classes.filter}>
        <Typography
          className={classes.marginAutoItem}
          variant="h1"
          component="h2"
        >
          Book Manager
        </Typography>
      </Container>
      <Container>
        <Container>
          <CreateBook onCreateBook={onCreateBook} />
        </Container>
        <div style={{ width: "100%" }}>
          <Box className={classes.filter}>
            <Container p={1}>
              <FilterBar
                className={classes.paper}
                tagsList={tagsList}
                onFilterTag={onFilterTag}
              />
              <SearchResults
                books={currentBooks}
                onEdit={onEditBook}
                onDelete={onDeleteBook}
              />
              <Container className={classes.filter}>
                <PaginationLinks
                  booksPerPage={booksPerPage}
                  totalBooks={searchResults.length}
                  paginate={paginate}
                />
              </Container>
            </Container>
            <Container p={1}>
              <Container className={classes.subContainer}>
                <Typography
                  className={classes.marginAutoItem}
                  variant="h5"
                  gutterBottom
                >
                  Create a list
                </Typography>
              </Container>
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
        <Container className={classes.filter}>
          <ListOfLists
            lists={listOfLists}
            onDelete={onDeleteList}
            onFilter={onFilterList}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default App;
