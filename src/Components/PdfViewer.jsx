import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./PdfViewer.css";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PdfViewer({ file }) {
  const [pages, setpages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className="pdf_viewbox">
      <Document
        file={`http://localhost:3000${file}`}
        onLoadSuccess={({ pages }) => setpages(pages)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        page {pageNumber} of {pages}
      </p>
      <FaChevronLeft
        className="page_changer_right"
        onClick={() => setPageNumber(pageNumber + 1)}
        disabled={pageNumber == pages}
      />
      <FaChevronRight
        className="page_changer_left"
        onClick={() => setPageNumber(pageNumber - 1)}
        disabled={pageNumber == 1}
      />
    </div>
  );
}
