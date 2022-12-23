import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Canada from "./pages/Canada";
import Navbar from './components/Navbar';
import Mapİndex from "./Mapİndex";
import Covid from "./pages/Covid";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Mapİndex/>} />
      <Route path="/canada" element={<Canada/>} />
      <Route path="/covid" element={<Covid/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
