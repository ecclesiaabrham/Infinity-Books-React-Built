import { FaHeart, FaStar, FaBookmark, FaHome } from "react-icons/fa";
import "./Header.css";
export default function SearchBar() {
  return (
    <div className="header_container">
      <div className="header">
        <input className="search_space" />
        <div className="reaction_icon">
          <div className="icon">
            <FaHome className="star_icon " />
            <span className="tooltip">Home</span>
          </div>
          <div className="icon">
            <FaHeart className="heart_icon " />
            <span className="tooltip">Likes</span>
          </div>
          <div className="icon">
            <FaStar className="star_icon " />
            <span className="tooltip">Favourites</span>
          </div>
          <div className="icon">
            <FaBookmark className="bookmark_icon " />
            <span className="tooltip">Bookmarks</span>
          </div>
        </div>
      </div>
    </div>
  );
}
