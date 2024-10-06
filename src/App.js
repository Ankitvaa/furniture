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
import Pdp from "./pages/pdp/Pdp";
import { Cart } from "./pages/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:categoryName" element={<Categories />} />
          <Route path="products/product/:productId" element={<Pdp/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
