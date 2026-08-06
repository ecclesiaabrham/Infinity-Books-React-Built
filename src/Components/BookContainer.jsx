import useBooks from "../hooks/useBooks";
import BookList from "./BookList";
import "./BookContainer.css";

export default function BookContainer({ setFile }) {
  const books = useBooks();

  return (
    <div className="book_container">
      <BookList books={books} setFile={setFile} />
    </div>
  );
}
