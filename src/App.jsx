import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LikePage from "./Pages/LikePage";
import FavouritePage from "./Pages/FavouritePage";
import BookmarkPage from "./Pages/BookmarkPage";
import Layout from "./Pages/Layout";
import PdfReader from "./Pages/PdfReader";
function App() {
  const [file, setFile] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage setFile={setFile} />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Route>
      <Route path="pdfview" element={<PdfReader file={file} />} />
    </Routes>
  );
}

export default App;
