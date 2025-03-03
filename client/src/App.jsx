<<<<<<< HEAD
import './assets/css/style.css'
import Allhome from './component/home/Allhome'
import Allcontant from './component/contact/Allcontact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let routers = createBrowserRouter([
  {path:'/' , element:<App/>},
{path:'home' , element:<Allhome/>},
{path:'contact' , element:<Allcontant/>},
]
)
=======
import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Search from "./component/search/Search";
import Halls from "./component/halls/halls";
import Footer from "./component/footer/Footer";
>>>>>>> 34594467ee4c0abf5f7116aff03557d7a398b2bc

function App() {
  return (
    <>
<<<<<<< HEAD
    <RouterProvider router={routers}/>
=======
      <Navbar />
      <Search />
      <Halls />
      <Footer />
>>>>>>> 34594467ee4c0abf5f7116aff03557d7a398b2bc
    </>
  );
}

export default App;
