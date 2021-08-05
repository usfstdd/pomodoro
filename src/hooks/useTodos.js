import { useState, React } from "react";
function useTodos(initialVal) {
  const [todos, setTodo] = useState(initialVal);
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

  return [todos, addTodo, setTodo];
}
export default useTodos;
