import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "70%",
    direction: "rtl",
  },
};
function TodoPomodoroApp({ classes }) {
  return (
    <Container className={classes.root}>
      <TodoList />
      <TodoInput />
    </Container>
  );
}
export default withStyles(styles)(TodoPomodoroApp);
