import { memo } from "react";
import "../TodoList/TodoList.css";

interface TodoFormProps {
  descriptionValue: string;
  handleChangeDescriptionValue: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TodoForm = (props: TodoFormProps) => {
  const { descriptionValue, handleChangeDescriptionValue, handleAddTodo } =
    props;

  return (
    <form onSubmit={handleAddTodo} className="todo-form">
      <input
        autoFocus
        type="text"
        value={descriptionValue}
        onChange={handleChangeDescriptionValue}
        placeholder="Enter a new todo..."
      />
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default memo(TodoForm);
