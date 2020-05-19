import React, { useState } from 'react';
import {TextField, Button, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '45ch',
    },
  },
}));

const CreateBook = (props) => {
  const classes = useStyles();

  const [showNewCardForm, setshowNewCardForm] = useState(false);
  const [title, settitle] = useState('')
  const [tags, settags] = useState('')
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')

  const onTitleChange = (e) => {
    settitle(e.target.value);
  }

  const onDescriptionChange = (e) => {
    setdescription(e.target.value)
  }

  const onTagsChange = (e) => {
    settags(e.target.value)  
  }

  const onImageChange = (e) => {
    setimage(e.target.value)
  }

  const resetForm = () => {
      setshowNewCardForm(false)
      settitle('')
      setdescription('')
      settags('')
      setimage('')
  }

  const onCreateBook = (e) => {
    e.preventDefault();
    if (title.length !== 0 && description.length !== 0 && tags.length !== 0 && image.length !== 0 ){
    props.onCreateBook({
      title: title,
      description: description,
      tags: tags,
      image: image,
    });
    resetForm()
  } else {
    return
  }
  }

  const toggleForm = () => {
    setshowNewCardForm(!showNewCardForm)
  }

    return (
     <Container>
        <div className='task-list-header'>
          <Button 
            variant="contained"
            color="primary"
            onClick={toggleForm}
          >
            + New book
          </Button>
        </div>
        {showNewCardForm && (
          <form className={classes.root} noValidate autoComplete="off" onSubmit={onCreateBook}>
             <div> 
              <TextField
                helperText="Required."
                error ={title.length !== 0 ? false : true}
                onChange={onTitleChange}
                value={title}
                type='text'
                placeholder='Title'
              />
              <TextField
                helperText="Required."
                error ={description.length !== 0 ? false : true}
                id="standard-multiline-static"
                multiline
                rowsMax={4} 
                onChange={onDescriptionChange}
                value={description}
                type='text'
                placeholder='Description'
              />
            </div>
            <div>
              <TextField
                helperText="Required."
                error ={tags.length !== 0 ? false : true}
                onChange={onTagsChange}
                value={tags}
                type='text'
                placeholder='Insert Tags separated by commas'
              />
              <TextField
                helperText="Required."
                error ={image.length !== 0 ? false : true}
                onChange={onImageChange}
                value={image}
                type='text'
                placeholder='Image URL'
              />
            </div>
            <Button
              variant="contained"
              type='submit'
              color="primary"
              onClick={onCreateBook}
            >
              Save
            </Button>
          </form>
        )}
      </Container>
    );
}

export default CreateBook