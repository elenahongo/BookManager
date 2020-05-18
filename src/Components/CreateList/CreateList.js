import React, { Component } from 'react';
import BookList from '../BookList/BookList'
import {Container, Button} from '@material-ui/core';

class CreateList extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  render() {
    return (
      <Container>
        <input
          value={this.props.listName}
          onChange={this.handleNameChange}
        />
        <BookList
          books={this.props.createListBooks}
          isRemoval={false}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.onSave}
        >
        SAVE LIST
        </Button>
      </Container>
    );
  }
}

export default CreateList