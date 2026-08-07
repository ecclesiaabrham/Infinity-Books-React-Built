import useBooks from "../hooks/useBooks";
import BookList from "./BookList";
import Searched from "./Searched";
import { BookContext } from "../context/BookContext";
import { useContext } from "react";
export default function BookContainer() {
  const books = useBooks();
  const { inputText, setFile } = useContext(BookContext);
  return (
    <div className="book_container">
      {inputText === "" ? (
        <BookList books={books} setFile={setFile} />
      ) : (
        <Searched books={books} inputText={inputText} setFile={setFile} />
      )}
    </div>
  );
}
