import useBooks from "../hooks/useBooks";
import BookList from "../Components/BookList";
import Searched from "../Components/Searched";
export default function LikePage({ setFile, inputText }) {
  const books = useBooks();

  const likeArray = JSON.parse(localStorage.getItem("like")) || [];

  const like = books.filter((data) => likeArray.includes(data.id));
  return (
    <div className="book_container">
      {inputText === "" ? (
        <BookList books={like} setFile={setFile} />
      ) : (
        <Searched books={like} inputText={inputText} setFile={setFile} />
      )}
    </div>
  );
}
