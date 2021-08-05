import List from "@material-ui/core/List";

import Paper from "@material-ui/core/Paper";
import TodoItem from "./TodoItem";
import { Divider } from "@material-ui/core";

function TodoItems({ todos, classes }) {
  return (
    <List>
      {todos.map((todo) => (
        <div>
          <TodoItem todo={todo} />
          <Divider />
        </div>
      ))}
    </List>
  );
}

export default TodoItems;
