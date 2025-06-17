export interface Todo {
  id: number;
  description: string;
  isDone: boolean;
}

export const todoList: Todo[] = [
  {
    id: 1,
    description: "Walk the dog",
    isDone: false,
  },
  {
    id: 2,
    description: "Write React homework",
    isDone: false,
  },
];
