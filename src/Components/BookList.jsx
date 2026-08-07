import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import UserAction from "./UserAction";
export default function BookList({ books, setFile }) {
  const { like, setLike, favorite, setFavorite, bookmark, setBookmark } =
    useContext(BookContext);

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
              to={`/pdfview/${data.id}`}
              className="link"
              onClick={() => setFile(data.src)}
            >
              <div className="image_box">
                <img
                  src={`https://infinity-books-react-built-1.onrender.com${data.thumbnail}`}
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
