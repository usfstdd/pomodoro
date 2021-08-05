import React from "react";

export const todosObject = {
  todos: [
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
  ],
  addTodo: () => {},
};
export const TodosContext = React.createContext(todosObject.data);
