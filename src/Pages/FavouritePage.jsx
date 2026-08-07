import { useContext } from "react";
import useBooks from "../hooks/useBooks";
import BookList from "../Components/BookList";
import Searched from "../Components/Searched";
import { BookContext } from "../context/BookContext";
export default function FavouritePage() {
  const books = useBooks();
  const { inputText, setFile, favorite } = useContext(BookContext);
  const favoriteArray = favorite;

  const favorites = books.filter((data) => favoriteArray.includes(data.id));

  return favorites.length === 0 ? (
    <div className="book_container">
      <p className="notfound_message">No book found</p>
    </div>
  ) : (
    <div className="book_container">
      {inputText === "" ? (
        <BookList books={favorites} setFile={setFile} />
      ) : (
        <Searched books={favorites} inputText={inputText} setFile={setFile} />
      )}
    </div>
  );
}
