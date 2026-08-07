import { useParams } from "react-router-dom";
import useBooks from "../hooks/useBooks";
import PdfViewer from "../Components/PdfViewer";

export default function PdfReader() {
  const { id } = useParams();
  const books = useBooks();

  const book = books.find((data) => data.id === id);

  return !book ? <p>Book not found</p> : <PdfViewer file={book.src} />;
}
