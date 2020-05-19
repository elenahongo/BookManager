import React from "react";
import { Typography, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ListOfLists = (props) => {
  const classes = useStyles();

  const onDeleteList = (id) => {
    props.onDelete(id);
  };
  const onFilterList = (id) => {
    props.onFilter(id);
  };

  return (
    <div className={classes.root}>
      <div className={classes.filter}>
        <Typography variant="h5" gutterBottom>
          Filter by list
        </Typography>
      </div>
      <Grid container spacing={3}>
        {props.lists.map((list) => {
          console.log(list);
          return (
            <Grid item xs={12} md={3} key={`listid${list.id}`}>
            <Paper className={classes.paper}>
              <Link className={classes.paper} href="#" onClick={onFilterList.bind(this, list.id)}>
                {list.title}
              </Link>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                onClick={onDeleteList.bind(this, list.id)}
              >
                Delete
              </Button>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ListOfLists;
