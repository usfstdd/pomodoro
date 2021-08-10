import List from "@material-ui/core/List";
import TodoItem from "./TodoItem";

import { TodosContext } from "./todos-context";
import { useContext } from "react";

function TodoList({ parentId = null }) {
  const { todos } = useContext(TodosContext);

  const todoHasChild = (id) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].parentId === id) return true;
    }
    return false;
  };

  return (
    <List style={{ width: "100%" }}>
      {todos.map((todo) => {
        if (todo.parentId === parentId) {
          return (
            <div className="singleListItem" key={todo.id}>
              <TodoItem todo={todo} todoHasChild={todoHasChild(todo.id)} />
            </div>
          );
        }
        return "";
      })}
    </List>
  );
}

export default TodoList;
