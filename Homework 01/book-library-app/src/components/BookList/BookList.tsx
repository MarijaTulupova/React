import { bookList } from "../../data/books";
import styles from "./BookList.module.css";
import BookItem from "./BookItem";
import { Counter } from "../Counter/Counter";

export const BookList = () => {
  const totalBooks = bookList.length;

  return (
    <>
      <h3 className={styles.heading}>Book List:</h3>
      <ul className={styles.bookList}>
        {bookList.map((book) => {
          return <BookItem key={book.id} book={book} />;
        })}
      </ul>
      <Counter count={totalBooks} />
    </>
  );
};
