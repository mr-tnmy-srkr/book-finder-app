import { useState } from "react";
import { books } from "./books";
import SingleBook from "./SingleBook";

const BookContainer = () => {
  const [allBooks, setAllBooks] = useState(books);
  console.log(allBooks);

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allBooks.map((book) => (
          <SingleBook key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
};
export default BookContainer;
