import "./assets/css/style.css";
import Navbar from "./component/Navbar/Navbar";
import Halls from "./component/halls/Halls";
import Footer from "./component/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HallDetails from "./component/hall";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
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
