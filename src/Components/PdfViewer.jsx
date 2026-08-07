import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaBookmark } from "react-icons/fa";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import useBooks from "../hooks/useBooks";
import "./PdfViewer.css";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const books = useBooks();
  const bookmarkArray = JSON.parse(localStorage.getItem("bookmark"));
  const marks = books.filter((data) => bookmarkArray.includes(data.id));
  const book = marks.filter((B) => B.src === file);
  console.log(book);
  return (
    <div className="pdf_viewbox">
      <Document
        file={`http://localhost:3000${file}`}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <FaBookmark
        className={book.length == 0 ? "book_mark" : "yellow_bookmark"}
      />
      <p className="page_teller">
        page {pageNumber} of {numPages}
      </p>
      <FaChevronRight
        className="page_changer_right"
        onClick={() => {
          if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
          }
        }}
      />
      <FaChevronLeft
        className="page_changer_left"
        onClick={() => {
          if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
          }
        }}
      />
    </div>
  );
}
