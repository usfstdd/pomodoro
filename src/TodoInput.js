import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";

const values = {
  showTextField: "اضافه کردن وظیفه",
  addTask: "اضافه کردن به لیست",
  cancel: "بیخیال",
  taskTittle: "عنوان وظیفه‌ی جدید",
  taskDiscription: "توضیخات وظیفه‌ی جدید",
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

function TodoInput({ classes, addTodo }) {
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
          <Typography>{values.showTextField}</Typography>
        </Button>
      ) : (
        <Paper style={{ padding: "1rem" }}>
          <TextField
            id="title"
            label={values.taskTittle}
            variant="outlined"
            className={classes.textEaria}
            value={todoTitle}
            onChange={handleTitleChange}
          />

          <TextField
            style={{ marginTop: "1.5rem" }}
            className={classes.textEaria}
            id="decription"
            label={values.taskDiscription}
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
            {values.addTask}
          </Button>
          <Button onClick={() => toggleBtn(true)}>{values.cancel}</Button>
        </Paper>
      )}
    </div>
  );
}
export default withStyles(style)(TodoInput);
