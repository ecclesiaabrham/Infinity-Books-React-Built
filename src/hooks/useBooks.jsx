import { useState, useEffect } from "react";

export default function useBooks() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBook([...data]);
      });
  }, []);

  return book;
}
