import { FaHeart, FaStar, FaBookmark } from "react-icons/fa";
export default function UserAction({
  data,
  like,
  favorite,
  bookmark,
  handleLike,
  handleFavorite,
  handleBookmark,
}) {
  const userAction = (
    <div className="action_container">
      <FaHeart
        className={like.includes(data.id) ? "icon liked" : "icon "}
        onClick={() => handleLike(data.id)}
      />
      <FaStar
        className={favorite.includes(data.id) ? "icon favorited" : "icon "}
        onClick={() => handleFavorite(data.id)}
      />
      <FaBookmark
        className={bookmark.includes(data.id) ? "icon bookmarked" : "icon "}
        onClick={() => handleBookmark(data.id)}
      />
    </div>
  );

  return userAction;
}
