import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Informacion from "./components/Informacion";
import Tachos from "./components/Tachos";
import Reciclaje from "./img/Reciclaje.PNG";
import { Introduccion } from "./components/Introduccion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduccion />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/informacion" element={<Informacion />}></Route>
          <Route path="/tachos" element={<Tachos />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
