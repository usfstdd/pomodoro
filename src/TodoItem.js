import TodoItemExteraElements from "./TodoItemExteraElements";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { useState } from "react";
const styles = (theme) => ({
  main: {
    margin: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    "& #todoTitle": {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
    "& #todoDescription span": {
      paddingRight: "2rem",
      fontSize: "0.7rem",
    },
  },
  extera: {
    direction: "ltr",
  },
});

function TodoItem({ todo, classes }) {
  const [hover, toggleHover] = useState(true);

  return (
    <ListItem
      className={classes.main}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <div id="todoTitle">
        <FormControlLabel
          control={
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
            />
          }
          label={<Typography>{todo.task}</Typography>}
        />

        <div className={classes.extera}>
          {hover && <TodoItemExteraElements />}
        </div>
      </div>
      <div id="todoDescription">
        <Typography>
          <span>{todo.description}</span>
        </Typography>
      </div>
    </ListItem>
  );
}
export default withStyles(styles)(TodoItem);
