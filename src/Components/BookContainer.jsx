import { useState, useEffect } from "react";
import "./BookContainer.css";
export default function BookContainer({ bookContainerRef }) {
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
    <div className="book_container" ref={bookContainerRef}>
      {image.map((data, index) => {
        return (
          <div key={index} className="image_box">
            <img src={data.src} className="books" />
          </div>
        );
      })}
    </div>
  );
}
