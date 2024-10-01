import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Home/header/Header";
import Navbar from "./components/Home/navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Product";
import Categories from "./pages/category/Category";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/Blogs/Blog";
import Footer from "./components/Home/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
