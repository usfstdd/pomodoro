import List from "@material-ui/core/List";
import TodoItem from "./TodoItem";
import { Divider } from "@material-ui/core";

import { TodosContext } from "./todos-context";
import { useContext } from "react";
function TodoList() {
  const { todos } = useContext(TodosContext);
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

export default TodoList;
