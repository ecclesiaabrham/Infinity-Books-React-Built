import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserAction from "./UserAction";
export default function BookList({ books, setFile }) {
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

  function handleLike(id) {
    setLike((prev) => {
      if (prev.includes(id)) {
        return prev.filter((bookId) => bookId !== id);
      } else {
        return [...prev, id];
      }
    });
  }
  function handleFavorite(id) {
    setFavorite((prev) => {
      if (prev.includes(id)) {
        return prev.filter((bookId) => bookId !== id);
      } else {
        return [...prev, id];
      }
    });
  }
  function handleBookmark(id) {
    setBookmark((prev) => {
      if (prev.includes(id)) {
        return prev.filter((bookId) => bookId !== id);
      } else {
        return [...prev, id];
      }
    });
  }
  return (
    <>
      {books.map((data) => {
        return (
          <div key={data.id}>
            <Link
              to="pdfview"
              className="link"
              onClick={() => setFile(data.src)}
            >
              <div className="image_box">
                <img
                  src={`http://localhost:3000${data.thumbnail}`}
                  className="books"
                />
              </div>
              <p className="title">{data.title}</p>
            </Link>
            <UserAction
              data={data}
              like={like}
              favorite={favorite}
              bookmark={bookmark}
              handleLike={handleLike}
              handleFavorite={handleFavorite}
              handleBookmark={handleBookmark}
            />
          </div>
        );
      })}
    </>
  );
}
