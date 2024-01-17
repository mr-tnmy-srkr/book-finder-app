import SingleBook from "./SingleBook";

const BookContainer = ({allBooks}) => {
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allBooks.map((book) => (
          <SingleBook key={book.id} book={book} />
        ))} 
       
      </div>
        {
          allBooks.length===0 && <p className="text-center text-3xl">No Book Found</p>
        }
    </main>
  );
};
export default BookContainer;
