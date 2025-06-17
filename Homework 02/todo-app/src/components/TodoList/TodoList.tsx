import { useState, useCallback } from "react";

import { todoList as initialTodos } from "../../data/todo-list";
import TodoItem from "./TodoItem";
import type { Todo } from "../../data/todo-list";
import "./TodoList.css";
import TodoForm from "../TodoForm/TodoForm";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [descriptionValue, setDescriptionValue] = useState("");

  const handleChangeDescriptionValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescriptionValue(e.target.value);
    },
    []
  );

  const handleAddTodo = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const trimmedDescription = descriptionValue.trim();
      if (!trimmedDescription) {
        return;
      }

      const newTodo: Todo = {
        id: Date.now(),
        description: trimmedDescription,
        isDone: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setDescriptionValue("");
    },
    [descriptionValue]
  );

  const markTodoAsDone = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  }, []);

  return (
    <div className="todo-list-container">
      <h3>Todo List:</h3>

      <TodoForm
        descriptionValue={descriptionValue}
        handleChangeDescriptionValue={handleChangeDescriptionValue}
        handleAddTodo={handleAddTodo}
      />

      <ul className="todo-items">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onFinish={markTodoAsDone} />
        ))}
      </ul>
    </div>
  );
};
