import { BookList } from "../components/BookList/BookList";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

function Home() {
  return (
    <>
      <Header title="My Book Library" username="marija.tulupova" />
      <BookList />
      <Footer />
    </>
  );
}

export default Home;
