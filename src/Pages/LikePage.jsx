import { useContext } from "react";
import useBooks from "../hooks/useBooks";
import BookList from "../Components/BookList";
import Searched from "../Components/Searched";
import { BookContext } from "../context/BookContext";
export default function LikePage() {
  const books = useBooks();
  const { inputText, setFile, like } = useContext(BookContext);
  const likeArray = like;

  const likes = books.filter((data) => likeArray.includes(data.id));
  return like.length === 0 ? (
    <div className="book_container">
      <p className="notfound_message">No book found</p>
    </div>
  ) : (
    <div className="book_container">
      {inputText === "" ? (
        <BookList books={likes} setFile={setFile} />
      ) : (
        <Searched books={likes} inputText={inputText} setFile={setFile} />
      )}
    </div>
  );
}
