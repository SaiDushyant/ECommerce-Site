import { Route, Routes } from "react-router-dom";
import AuthPages from "./pages/AuthPages.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPages />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
