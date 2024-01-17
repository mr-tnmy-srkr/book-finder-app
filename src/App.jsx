import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BookContainer from "./components/books/BookContainer";
import { books } from "./components/data/books";

export default function App() {
  const [allBooks, setAllBooks] = useState(books);
  const [to, setTo] = useState("");
  const [searchBook, setSearchBook] = useState(books);

  function onSearch(searchChar) {
    const allPreviousBooks = [...books];
    const searchedBooks = allPreviousBooks.filter((book) =>
      book.title.toLowerCase().includes(searchChar.toLowerCase())
    );
    if (searchChar) {
      setAllBooks(searchedBooks);
      setSearchBook(searchedBooks);
    } else {
      setAllBooks(books);
      setSearchBook(books);
    }
  }
  useEffect(() => {
    if (to === "name_asc") {
      const sortBooks = [...searchBook].sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      setAllBooks(sortBooks);
    } else if (to === "name_desc") {
      const sortBooks = [...searchBook].sort((b, a) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      setAllBooks(sortBooks);
    } else if (to === "year_asc") {
      const sortBooks = [...searchBook].sort(
        (a, b) => a.publicationYear - b.publicationYear
      );
      setAllBooks(sortBooks);
    } else if (to === "year_desc") {
      const sortBooks = [...searchBook].sort(
        (b, a) => a.publicationYear - b.publicationYear
      );
      setAllBooks(sortBooks);
    }
  }, [searchBook, to]);

  return (
    <div className="">
      <Navbar />
      <Header onSearch={onSearch} to={to} setTo={setTo} />
      <BookContainer allBooks={allBooks} />
      <Footer />
    </div>
  );
}
