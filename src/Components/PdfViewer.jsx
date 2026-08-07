import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect, useCallback } from "react";
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
  const bookmarkArray = JSON.parse(localStorage.getItem("bookmark")) || [];
  const marks = books.filter((data) => bookmarkArray.includes(data.id));
  const book = marks.find((B) => B.src === file);
  const previousPage = useCallback(() => {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const nextPage = useCallback(() => {
    setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
  }, [numPages]);

  useEffect(() => {
    function handleKey(event) {
      event.key === "ArrowLeft" && previousPage();

      event.key === "ArrowRight" && nextPage();
    }

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [nextPage, previousPage]);

  return (
    <div className="pdf_viewbox">
      <Document
        file={`http://localhost:3000${file}`}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <FaBookmark className={!book ? "book_mark" : "yellow_bookmark"} />
      <p className="page_teller">
        page {pageNumber} of {numPages}
      </p>
      <FaChevronRight className="page_changer_right" onClick={nextPage} />
      <FaChevronLeft className="page_changer_left" onClick={previousPage} />
    </div>
  );
}
