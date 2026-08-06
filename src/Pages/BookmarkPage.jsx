import useBooks from "../hooks/useBooks";
import BookList from "../Components/BookList";
import Searched from "../Components/Searched";
export default function BookmarkPage({ setFile, inputText }) {
  const books = useBooks();

  const bookmarkArray = JSON.parse(localStorage.getItem("bookmark")) || [];

  const bookmark = books.filter((data) => bookmarkArray.includes(data.id));
  return (
    <div className="book_container">
      {inputText === "" ? (
        <BookList books={bookmark} setFile={setFile} />
      ) : (
        <Searched books={bookmark} inputText={inputText} setFile={setFile} />
      )}
    </div>
  );
}
