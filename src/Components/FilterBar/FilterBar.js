import React from "react";
import { TextField, Typography, Container } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  filter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const FilterBar = (props) => {
  const classes = useStyles();

  const onFilterTag = (ev, va) => {
    props.onFilterTag(va);
  };

  return (
    <Container>
      <div className={classes.filter}>
        <Typography variant="h5" gutterBottom>
          Books
        </Typography>
      </div>
      <div className={classes.filter}>
        <Autocomplete
          id="combo-box-demo"
          options={props.tagsList}
          style={{ width: "70%" }}
          renderInput={(params) => (
            <TextField {...params} label="Filter by tag" variant="outlined" />
          )}
          onChange={onFilterTag}
        />
      </div>
    </Container>
  );
};

export default FilterBar;
