import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
