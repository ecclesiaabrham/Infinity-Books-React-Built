export function search(inputText, books) {
  const filtered = books.filter((book) =>
    book.title.toLowerCase().includes(inputText.toLowerCase()),
  );

  return filtered;
}
