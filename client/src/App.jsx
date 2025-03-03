import "./assets/css/style.css";
import Navbar from "./component/Navbar/Navbar";
import Halls from "./component/halls/Halls";
import Footer from "./component/footer/Footer";
import Section2 from "./component/section2/Section2";
import Search from "./component/search/Search";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Halls />
      <Section2 />
      <Footer />
    </>
  );
}

export default App;
