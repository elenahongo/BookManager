import React, { Component } from 'react';
import {Input, Button, Container} from '@material-ui/core';

class CreateBook extends Component {

  constructor(props){
    super(props);
    this.state = {
      showNewCardForm: false,
      title: '',
      description: '',
      tags: '',
      image: '',
    };
  }


  onTitleChange = (e) => {
    this.setState({ title: e.target.value});
  }

  onDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  onTagsChange = (e) => {
    this.setState({ tags: e.target.value });
  }

  onImageChange = (e) => {
    this.setState({ image: e.target.value });
  }

  resetForm() {
    this.setState({
      showNewCardForm: false,
      title: '',
      description: '',
      tags: '',
      image: '',
    });
  }

  onCreateBook = (e) => {
    e.preventDefault();
    this.props.onCreateBook({
      title: this.state.title,
      description: this.state.description,
      tags: this.state.tags,
      image: this.state.image,
    });
    this.resetForm()
  }

  toggleForm = () => {
    this.setState({ showNewCardForm: !this.state.showNewCardForm});
  }

  render() {
    return (
     <Container>
        <div className='task-list-header'>
          <Button 
            variant="contained"
            color="primary"
            onClick={this.toggleForm}
          >
            + New book
          </Button>
        </div>
        {this.state.showNewCardForm && (
          <form noValidate autoComplete="off" onSubmit={this.onCreateTask}>
            <Input
              onChange={this.onTitleChange}
              value={this.state.title}
              type='text'
              placeholder='Title'
            />
            <Input
              onChange={this.onDescriptionChange}
              value={this.state.description}
              type='text'
              placeholder='Description'
            />
            <Input
              onChange={this.onTagsChange}
              value={this.state.tags}
              type='text'
              placeholder='Tags'
            />
            <Input
              onChange={this.onImageChange}
              value={this.state.image}
              type='text'
              placeholder='Image'
            />
            <Button
              variant="contained"
              type='submit'
              color="primary"
              onClick={this.onCreateBook}
            >
              Save
            </Button>
          </form>
        )}
      </Container>
    );
  }

}

export default CreateBook