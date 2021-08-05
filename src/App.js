import TodoPomodoroApp from "./TodoPomodoroApp";
import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
const style = (theme) => ({
  "root>*": {
    margin: theme.spacing(10),
  },
});
function App({ classes }) {
  const initialState = [
    {
      id: 1,
      task: "اولین کاری که باید بکنی",
      description: "توضیحاتی که برای کار اول نوشته شده است.",
      isComplited: false,
      parentId: null,
    },
    {
      id: 2,
      task: "دومین کاری که باید بکنی",
      description: "توضیحاتی که برای کار دوم نوشته‌شده‌است.",
      isComplited: false,
      parentId: 1,
    },
  ];
  const [todos, setTodo] = useState(initialState);
  const addTodo = (task, description) => {
    setTodo([
      ...todos,
      {
        id: 5,
        task: task,
        description: description,
        isComplited: false,
        parentId: null,
      },
    ]);
  };
  return (
    <div className={classes.root}>
      <TodoPomodoroApp todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default withStyles(style)(App);
