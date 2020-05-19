import React, { Component } from "react";
import BookList from "../BookList/BookList";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";

class CreateList extends Component {
  constructor(props) {
    super(props);
    this.state = { helperText: "", error: false };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  onDragOver(event) {
    event.preventDefault();
  }

  handleNameChange(ev) {
    if (ev.target.value.length > 0) {
      this.setState({ helperText: "", error: false });
      this.props.onNameChange(ev.target.value);

    } else {
      this.setState({ helperText: "Required.", error: true });
    }
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    this.props.onAddBook(id);
  };

  render() {
    return (
      <Box
        onDragOver={(e) => this.onDragOver(e)}
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        onDrop={(e) => this.onDrop(e, "list")}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          css={{ height: 100 }}
        >
          <TextField
            value={this.props.listName}
            variant="outlined"
            id="outlined-size-normal"
            helperText={this.state.helperText}
            error={this.state.error}
            placeholder={"New List Name"}
            onChange={this.handleNameChange}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          css={{ height: 200 }}
        >
          <Typography variant="h6" gutterBottom>
            Drag and drop books here
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <BookList books={this.props.createListBooks} isRemoval={false} />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          css={{ height: 100 }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.onSave}
          >
            SAVE LIST
          </Button>
        </Box>
      </Box>
    );
  }
}

export default CreateList;
