import BookList from "./BookList";
import { search } from "../utils/search";
export default function Searched({ books, inputText, setFile }) {
  const filtered = search(inputText, books);
  return <BookList books={filtered} setFile={setFile} />;
}
