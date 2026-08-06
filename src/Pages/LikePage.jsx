import useBooks from "../hooks/useBooks";
import BookList from "../Components/BookList";
export default function LikePage({ setFile }) {
  const books = useBooks();

  const likeArray = JSON.parse(localStorage.getItem("like")) || [];

  const like = books.filter((data) => likeArray.includes(data.id));
  return (
    <div className="book_container">
      <BookList books={like} setFile={setFile} />
    </div>
  );
}
