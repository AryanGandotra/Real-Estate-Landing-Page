import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;