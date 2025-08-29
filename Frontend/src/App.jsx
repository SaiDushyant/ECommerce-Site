import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPages from "./pages/AuthPages.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPages />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
