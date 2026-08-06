import useBooks from "../hooks/useBooks";
import BookList from "../Components/BookList";
import Searched from "../Components/Searched";
export default function FavouritePage({ setFile, inputText }) {
  const books = useBooks();

  const favoriteArray = JSON.parse(localStorage.getItem("favorite")) || [];

  const favorites = books.filter((data) => favoriteArray.includes(data.id));

  return (
    <div className="book_container">
      {inputText === "" ? (
        <BookList books={favorites} setFile={setFile} />
      ) : (
        <Searched books={favorites} inputText={inputText} setFile={setFile} />
      )}
    </div>
  );
}
