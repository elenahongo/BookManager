import React, {useState} from 'react';
import { Modal, Button, Snackbar, IconButton, Input, TextField } from '@material-ui/core';
import BookManager from '../../util/BookManager'


const EditBook = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div>
      <h2>Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}
  
  const snackbarClose = (e) => {
    setSnackbarOpen(false)
  };  
  
  const handleSubmit = (e) => {
      e.preventDefault();
      BookManager.updateBook(book).then(book => {
        let updateSearch = searchResults.slice();
        console.log(book)
       // setSearchResults(updateSearch);
      })
  }


export default EditBook