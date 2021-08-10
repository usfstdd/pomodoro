import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import TodoItemExteraElements from "./TodoItemExteraElements";
import TodoList from "./TodoList";

import { useState, useContext } from "react";
import { TodosContext } from "./todos-context";

const styles = (theme) => ({
  main: {
    width: "100%",
    margin: theme.spacing(0),
    paddingLeft: "0",
    paddingBottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",

    "& .singleItem": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    "& .todoTitle": {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
    "& .todoDescription span": {
      paddingRight: "2rem",
      fontSize: "0.7rem",
    },
  },
  extera: {
    direction: "ltr",
  },
});

function TodoItem({ todo, todoHasChild, classes }) {
  const [hover, toggleHover] = useState(false);
  const [expaned, toggleExpaned] = useState(false);
  const [isCompleted, toggleIsCompleted] = useState(todo.isCompleted);

  const { isCompletedTodo } = useContext(TodosContext);

  return (
    <ListItem className={classes.main}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <div
          className="singleItem"
          onMouseEnter={() => toggleHover(true)}
          onMouseLeave={() => toggleHover(false)}
        >
          <div className="todoTitle">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <IconButton
                style={{
                  padding: "0px",
                  visibility: todoHasChild ? "visible" : "hidden",
                }}
                onClick={() => toggleExpaned(!expaned)}
              >
                {!expaned && <ChevronLeftIcon />}
                {expaned && <ExpandMoreIcon />}
              </IconButton>
              <Checkbox
                checked={isCompleted}
                onClick={() => {
                  isCompletedTodo(todo.id);
                  toggleIsCompleted(!isCompleted);
                }}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleOutlineIcon />}
              />
              {<Typography>{todo.task}</Typography>}
            </div>

            <div className={classes.extera}>
              {hover && <TodoItemExteraElements />}
            </div>
          </div>
          <div className="todoDescription">
            <Typography>
              <span>{todo.description}</span>
            </Typography>
          </div>
        </div>
        <div style={{ paddingRight: "31px" }}>
          <Divider />
        </div>
      </div>

      {expaned && <TodoList parentId={todo.id} />}
    </ListItem>
  );
}
export default withStyles(styles)(TodoItem);
