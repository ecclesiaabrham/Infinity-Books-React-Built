import { useState, useEffect } from "react";

export default function useBooks() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("https://infinity-books-react-built-1.onrender.com/books")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBook([...data]);
      });
  }, []);

  return book;
}
