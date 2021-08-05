import TodoInput from "./TodoInput";
import TodoItems from "./TodoList";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "70%",
    direction: "rtl",
  },
};
function TodoPomodoroApp({ classes, todos, addTodo }) {
  return (
    <Container className={classes.root}>
      <TodoItems todos={todos} />
      <TodoInput addTodo={addTodo} />
    </Container>
  );
}
export default withStyles(styles)(TodoPomodoroApp);
