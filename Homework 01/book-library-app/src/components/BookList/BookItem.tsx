import type { Book } from "../../data/books";
import styles from "./BookList.module.css";

interface BookItemProps {
  book: Book;
}

function BookItem({ book }: BookItemProps) {
  const isBookReadText = book.isRead ? "Read" : "Not read yet";

  return (
    <li
      className={styles.bookItem}
      style={{
        color: book.isRead ? "green" : "red",
        border: "1px solid",
        borderColor: book.isRead ? "green" : "red",
        padding: "8px",
        marginBottom: "8px",
        borderRadius: "4px",
      }}
    >
      {book.title}, {book.author}, {book.year}, {isBookReadText}
    </li>
  );
}

export default BookItem;
