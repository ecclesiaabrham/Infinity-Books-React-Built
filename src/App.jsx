import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LikePage from "./Pages/LikePage";
import FavouritePage from "./Pages/FavouritePage";
import BookmarkPage from "./Pages/BookmarkPage";
import Layout from "./Pages/Layout";
import PdfReader from "./Pages/PdfReader";
import "./index.css";
function App() {
  const [file, setFile] = useState(null);
  const [inputText, setInputText] = useState("");
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout setInputText={setInputText} inputText={inputText} />}
      >
        <Route
          index
          element={<HomePage setFile={setFile} inputText={inputText} />}
        />
        <Route
          path="/like"
          element={<LikePage setFile={setFile} inputText={inputText} />}
        />
        <Route
          path="/favourite"
          element={<FavouritePage setFile={setFile} inputText={inputText} />}
        />
        <Route
          path="/bookmark"
          element={<BookmarkPage setFile={setFile} inputText={inputText} />}
        />
      </Route>
      <Route path="/pdfview" element={<PdfReader file={file} />} />
    </Routes>
  );
}

export default App;
