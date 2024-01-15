import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import BookContainer from "./books/BookContainer";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <BookContainer/>
      <Footer/>
    </div>
  )
}
