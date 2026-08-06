import useBooks from "../hooks/useBooks";
import BookList from "./BookList";
import Searched from "./Searched";
import "./BookContainer.css";

export default function BookContainer({ setFile, inputText }) {
  const books = useBooks();

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
