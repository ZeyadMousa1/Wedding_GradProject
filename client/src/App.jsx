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

function App() {
  return (
    <>
    <RouterProvider router={routers}/>
    </>
  )
}

export default App

