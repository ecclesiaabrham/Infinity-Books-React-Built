import BookList from "./BookList";
import { search } from "../utils/search";
export default function Searched({ books, inputText, setFile }) {
  const filtered = search(inputText, books);
  return filtered.length !== 0 ? (
    <BookList books={filtered} setFile={setFile} />
  ) : (
    <p className="notfound_message">No book found</p>
  );
}
