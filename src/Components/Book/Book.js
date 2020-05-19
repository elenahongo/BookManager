import React, {useState} from 'react';
import {Input, Modal, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 470,
    maxHeight: 200,
    display: "flex"
  },
  media: {
    width: 100,
  },
});

const Book = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [title, settitle] = useState('')
  const [tags, settags] = useState('')
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

const onEditBook = (book) => {
  props.onEdit(book, {
    title: title ? title : book.title,
    description: description ? description: book.description,
    tags: tags ? tags: book.tags,
    image: image ? image: book.image,
  });
}

const onDeleteBook = () => {
  props.onDelete(props.book.id);
}

const onDragStart = (ev, id) => {
  console.log('dragstart: ', id)
  ev.dataTransfer.setData("id", id);
}

  const body = (
    <form noValidate autoComplete="off" >
            <Input
              onChange={onTitleChange}
              defaultValue={props.book.title}
              type='text'
            />
            <Input
              onChange={onDescriptionChange}
              defaultValue={props.book.description}
              type='text'
            />
            <Input
              onChange={onTagsChange}
              defaultValue={props.book.tags}
              type='text'
            />
            <Input
              onChange={onImageChange}
              defaultValue={props.book.image}
              type='text'
            />
            <Button
              variant="contained"
              type='submit'
              color="primary"
              onClick={onEditBook.bind(this, props.book)}
            >
              Save
            </Button>
            <Button
              variant="contained"
              type='button'
              color="primary"
              onClick={handleClose}
            >
              Close
            </Button>
          </form>
  )

    const renderAction = () => {
			if (props.isRemoval) {
	      return (
	        <CardActions>
            <Button size="small" color="primary" onClick={handleOpen}>
              Edit
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
            <Button size="small" color="primary" onClick={onDeleteBook}>
              Delete
            </Button>
          </CardActions>
	      );
	    } else {
	     return 
	    }
    }
    		
			return(
        <Card
          className={classes.root}
          onDragStart = {(e) => onDragStart(e, props.book.id)} 
          draggable
        >
          <CardMedia
              className={classes.media}
              component="img"
              alt={props.book.title}
              image={props.book.image}
              title={props.book.title}
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h6" gutterBottom>
                {props.book.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {props.book.description}
              </Typography>
              <Typography variant="caption" color="textSecondary" gutterBottom>
                Tags: {props.book.tags}
              </Typography>
            </CardContent>
          </CardActionArea>
          {renderAction()}
        </Card>
			);
	}

export default Book;
