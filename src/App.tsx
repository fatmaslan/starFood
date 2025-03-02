import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MealDetail from "./pages/MealDetail";


function App() {
  return (
    <div  >
    <Navbar/>
      <Routes >
        <Route path="/" element={<Home/>}></Route>
        <Route path="/meals/:id" element={<MealDetail/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
