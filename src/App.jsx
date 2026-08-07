import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LikePage from "./Pages/LikePage";
import FavouritePage from "./Pages/FavouritePage";
import BookmarkPage from "./Pages/BookmarkPage";
import Layout from "./Pages/Layout";
import PdfReader from "./Pages/PdfReader";
import { BookContext } from "./context/BookContext";
import "./index.css";
function App() {
  const [like, setLike] = useState(
    JSON.parse(localStorage.getItem("like")) || [],
  );
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorite")) || [],
  );
  const [bookmark, setBookmark] = useState(
    JSON.parse(localStorage.getItem("bookmark")) || [],
  );

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(like));
  }, [like]);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  const [file, setFile] = useState(null);
  const [inputText, setInputText] = useState("");
  const value = {
    setInputText,
    inputText,
    setFile,
    file,
    like,
    setLike,
    favorite,
    setFavorite,
    bookmark,
    setBookmark,
  };
  return (
    <BookContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/like" element={<LikePage />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Route>
        <Route path="/pdfview/:id" element={<PdfReader />} />
      </Routes>
    </BookContext.Provider>
  );
}

export default App;
