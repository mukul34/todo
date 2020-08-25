import React, { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import "./Todo.css";
import db from "./firebase";

function Todo(props) {
  const { todo } = props;

  return (
    <Fragment>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={todo.todo}
            secondary="Time to be the strongest "
          />
        </ListItem>
        <DeleteIcon
          variant="contained"
          color="secondary"
          onClick={(e) => db.collection("todos").doc(todo.id).delete()}
        ></DeleteIcon>
      </List>
    </Fragment>
  );
}

export default Todo;
