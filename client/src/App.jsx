import "./assets/css/style.css";
import Navbar from "./component/Navbar/Navbar";
import Halls from "./component/halls/Halls";
import Footer from "./component/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HallDetails from "./component/hall";
import Allhome from "./component/home/Allhome";
import Header from "./component/home/Header";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/home" element={<Allhome />} />
          <Route path="/halls" element={<Halls />} />

          <Route path="/halls/:id" element={<HallDetails />} />

          {/* 404 Page (Optional) */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
