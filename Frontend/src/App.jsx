import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPages from "./pages/AuthPages.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPages />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
