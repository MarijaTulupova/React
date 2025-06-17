import { memo } from "react";

import type { Todo } from "../../data/todo-list";
import "./TodoList.css";

interface TodoItemProps {
  todo: Todo;
  onFinish: (id: number) => void;
}

function TodoItem({ todo, onFinish }: TodoItemProps) {
  const isTodoDone = todo.isDone ? "Done" : "Not done yet";

  return (
    <li className={`todo-item ${todo.isDone ? "done" : ""}`}>
      <div className="todo-info">
        <span>{todo.description}</span>
        <span>{isTodoDone}</span>
      </div>

      {!todo.isDone && (
        <button className="finish-btn" onClick={() => onFinish(todo.id)}>
          FINISH
        </button>
      )}
    </li>
  );
}

export default memo(TodoItem);
