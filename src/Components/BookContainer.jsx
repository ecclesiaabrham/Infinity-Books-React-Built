import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookContainer.css";

export default function BookContainer({ setFile }) {
  const [image, setImage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImage([...data]);
      });
  }, []);

  return (
    <div className="book_container">
      {image.map((data, index) => {
        return (
          <Link to="pdfview" key={index} onClick={() => setFile(data.src)}>
            <div className="image_box">
              <img
                src={`http://localhost:3000${data.thumbnail}`}
                className="books"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
