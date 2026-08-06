import useBooks from "../hooks/useBooks";
import BookList from "../Components/BookList";
export default function FavouritePage({ setFile }) {
  const books = useBooks();

  const favoriteArray = JSON.parse(localStorage.getItem("favorite")) || [];

  const favorites = books.filter((data) => favoriteArray.includes(data.id));

  return (
    <div className="book_container">
      <BookList books={favorites} setFile={setFile} />
    </div>
  );
}
