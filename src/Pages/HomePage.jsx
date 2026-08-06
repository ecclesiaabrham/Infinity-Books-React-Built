import BookContainer from "../Components/BookContainer";
export default function HomePage({ setFile }) {
  return (
    <>
      <BookContainer setFile={setFile} />
    </>
  );
}
