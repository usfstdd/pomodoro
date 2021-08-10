import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { useContext } from "react";
import { TodosContext } from "./todos-context";

const values = {
  ADD_NEW_TASK: "اضافه کردن وظیفه",
  ADD_NEW_TASK_TO_LIST: "اضافه کردن به لیست",
  CANCEL: "بیخیال",
  NEW_TASK_TITLE: "عنوان وظیفه‌ی جدید",
  NEW_TASK_DESCRIPTION: "توضیخات وظیفه‌ی جدید",
};

const style = (theme) => ({
  body: {
    marginRight: theme.spacing(4),
  },
  textEaria: {
    width: "100%",
    direction: "rtl",
  },
});

function TodoInput({ classes }) {
  const { addTodo } = useContext(TodosContext);

  const [btn, toggleBtn] = useState(true);

  const [todoTitle, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const [todoDescription, setDescription] = useState("");
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className={classes.body}>
      {btn ? (
        <Button onClick={() => toggleBtn(false)}>
          <AddIcon />
          <Typography>{values.ADD_NEW_TASK}</Typography>
        </Button>
      ) : (
        <Paper style={{ padding: "1rem" }}>
          <TextField
            id="title"
            label={values.NEW_TASK_TITLE}
            variant="outlined"
            className={classes.textEaria}
            value={todoTitle}
            onChange={handleTitleChange}
          />

          <TextField
            style={{ marginTop: "1.5rem" }}
            className={classes.textEaria}
            id="decription"
            label={values.NEW_TASK_DESCRIPTION}
            multiline
            rows={4}
            variant="outlined"
            value={todoDescription}
            onChange={handleDescriptionChange}
          />
          <Button
            onClick={() => {
              addTodo(todoTitle, todoDescription);
              setTitle("");
              setDescription("");
            }}
          >
            {values.ADD_NEW_TASK_TO_LIST}
          </Button>
          <Button onClick={() => toggleBtn(true)}>{values.CANCEL}</Button>
        </Paper>
      )}
    </div>
  );
}
export default withStyles(style)(TodoInput);
