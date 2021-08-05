import TodoPomodoroApp from "./TodoPomodoroApp";
import { withStyles } from "@material-ui/core/styles";

import { TodosContext, todosObject } from "./todos-context";
import useTodos from "./hooks/useTodos";

const style = (theme) => ({
  "root>*": {
    margin: theme.spacing(10),
  },
});
function App({ classes }) {
  const [todos, addTodo] = useTodos(todosObject.todos);

  return (
    <div className={classes.root}>
      <TodosContext.Provider value={{ todos: todos, addTodo: addTodo }}>
        <TodoPomodoroApp />
      </TodosContext.Provider>
    </div>
  );
}

export default withStyles(style)(App);
