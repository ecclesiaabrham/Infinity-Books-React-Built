import useBooks from "../hooks/useBooks";
import BookList from "../Components/BookList";
export default function BookmarkPage({ setFile }) {
  const books = useBooks();

  const bookmarkArray = JSON.parse(localStorage.getItem("bookmark")) || [];

  const bookmark = books.filter((data) => bookmarkArray.includes(data.id));
  return (
    <div className="book_container">
      <BookList books={bookmark} setFile={setFile} />
    </div>
  );
}
