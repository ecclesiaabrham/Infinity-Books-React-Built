import { FaHeart, FaStar, FaBookmark, FaHome } from "react-icons/fa";
import "./Header.css";
export default function SearchBar() {
  return (
    <div className="header">
      <input className="search_space" />
      <div className="reaction_icon">
        <FaHome className="star_icon icon" />
        <FaHeart className="heart_icon icon" />
        <FaStar className="star_icon icon" />
        <FaBookmark className="bookmark_icon icon" />
      </div>
    </div>
  );
}
