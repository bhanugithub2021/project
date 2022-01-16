import react from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Navbar from "./components/layout/Navbar.js";
import { Routes, Route } from "react-router-dom";
import AddUser from "./components/pages/users/Adduser";
import EditUser from "./components/pages/users/Edituser";



{/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/> */}


export default function App() {
  return (

    <div>

      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />


        </Routes>

      </main>

    </div>


  );
}
