import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LikePage from "./Pages/LikePage";
import FavouritePage from "./Pages/FavouritePage";
import BookmarkPage from "./Pages/BookmarkPage";
import Layout from "./Pages/Layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Route>
    </Routes>
  );
}

export default App;
