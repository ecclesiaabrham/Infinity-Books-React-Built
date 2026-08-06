import BookContainer from "../Components/BookContainer";
export default function HomePage({ setFile, inputText }) {
  return (
    <>
      <BookContainer setFile={setFile} inputText={inputText} />
    </>
  );
}
