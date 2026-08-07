import { useContext } from "react";
import useBooks from "../hooks/useBooks";
import BookList from "../Components/BookList";
import Searched from "../Components/Searched";
import { BookContext } from "../context/BookContext";
export default function BookmarkPage() {
  const books = useBooks();
  const { inputText, setFile, bookmark } = useContext(BookContext);
  const bookmarkArray = bookmark;

  const bookmarks = books.filter((data) => bookmarkArray.includes(data.id));
  return bookmark.length === 0 ? (
    <div className="book_container">
      <p className="notfound_message">No book found</p>
    </div>
  ) : (
    <div className="book_container">
      {inputText === "" ? (
        <BookList books={bookmarks} setFile={setFile} />
      ) : (
        <Searched books={bookmarks} inputText={inputText} setFile={setFile} />
      )}
    </div>
  );
}
