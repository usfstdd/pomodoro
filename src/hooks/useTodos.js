import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useTodos(initialVal) {
  const [todos, setTodos] = useState(initialVal);
  const addTodo = (task, description) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: task,
        description: description,
        isCompleted: false,
        parentId: null,
      },
    ]);
  };
  const isCompletedTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
        return todo;
      })
    );
  };

  // const todoHasChild = (id) => {
  //   for (let i = 0; i < todos.length; i++) {
  //     if (todos[i].parentId === id) return true;
  //   }
  //   return false;
  // };
  return [todos, addTodo, isCompletedTodo, setTodos];
}
export default useTodos;
