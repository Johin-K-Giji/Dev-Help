
import './App.css';
import Git from './pages/Git';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Git" element={<Git />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
