export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  isRead: boolean;
}

export const bookList: Book[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    isRead: true,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    isRead: false,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    isRead: true,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    isRead: false,
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    isRead: true,
  },
];
