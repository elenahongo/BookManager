import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

class Book extends React.Component {
	constructor(props){
			super(props);
			this.onEditBook = this.onEditBook.bind(this);
			this.onDeleteBook = this.onDeleteBook.bind(this);
		}
  
    renderAction() {
			if (this.props.isRemoval) {
	      return (
	        <CardActions>
            <Button size="small" color="primary" onClick={this.onEditBook}>
              Edit
            </Button>
            <Button size="small" color="primary" onClick={this.onDeleteBook}>
              Delete
            </Button>
          </CardActions>
	      );
	    } else {
	     return 
	    }
    }
    
		onEditBook(){
			  this.props.onEdit(this.props.book);
		}

		onDeleteBook(){
				this.props.onDelete(this.props.book.id);
		}

		render () {
			return(
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={this.props.book.title}
              height="140"
              image={this.props.book.image}
              title={this.props.book.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.book.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.book.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Tags: {this.props.book.tags}
              </Typography>
            </CardContent>
          </CardActionArea>
          {this.renderAction()}
        </Card>
			);
		}
	}

export default Book;
