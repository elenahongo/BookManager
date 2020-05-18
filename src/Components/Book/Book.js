import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

class Book extends React.Component {
	constructor(props){
			super(props);
			this.editBook = this.editBook.bind(this);
			this.deleteBook = this.deleteBook.bind(this);
		}
  
    renderAction() {
			if (this.props.isRemoval) {
	      return (
	        <CardActions>
            <Button size="small" color="primary" onClick={this.onEdit}>
              Edit
            </Button>
            <Button size="small" color="primary" onClick={this.onDelete}>
              Delete
            </Button>
          </CardActions>
	      );
	    } else {
	     return 
	    }
    }
    
		editBook(){
			  this.props.onEdit(this.props.book);
		}

		deleteBook(){
				this.props.onDelete(this.props.book);
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
