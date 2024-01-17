import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import BookContainer from "./books/BookContainer";
import { books } from "./books/books";

export default function App() {
  const [allBooks, setAllBooks] = useState(books);

  function onSearch(searchChar) {
    // console.log(searchChar);
    const allPreviousBooks = [...books]
    // console.log(allPreviousBooks);
    const searchedBooks = allPreviousBooks.filter((book) =>
      book.title.toLowerCase().includes(searchChar.toLowerCase())
    );
    if (searchChar) {
      setAllBooks(searchedBooks);
    } else {
      setAllBooks(books);
    }
  }

  return (
    <div className="">
      <Navbar />
      <Header onSearch={onSearch} />
      <BookContainer allBooks={allBooks} />
      <Footer />
    </div>
  );
}
