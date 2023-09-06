import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Informacion from "./components/Informacion";
import Tachos from "./components/Tachos";
import Reciclaje from "./img/Reciclaje.PNG";

function App() {
  return (
    <div className="App">
      <nav
        style={{ backgroundColor: "white" }}
        className="navbar navbar-expand-lg navbar-light"
      >
        <a
          className="navbar-brand"
          href="/"
          style={{ maxWidth: "5%", marginLeft: "1rem" }}
        >
          <img src={Reciclaje} width="80%" alt=''/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" style={{ marginRight: "8%" }}>
              <a
                className="navbar-brand"
                href="/home"
                style={{ fontSize: "1.45rem" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item" style={{ marginRight: "8%" }}>
              <a className="nav-link" href="/informacion">
                Información
              </a>
            </li>
            <li className="nav-item" style={{ marginRight: "8%" }}>
              <a className="nav-link" href="/tachos">
                Tachos
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header
        className="App-header"
        style={{
          backgroundImage:
            "linear-gradient(-225deg, rgb(69 82 178) 0%, rgb(24 212 205 / 72%) 52%, rgb(0 255 7 / 57%) 100%)",
          paddingTop: "4%",
        }}
      >
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/informacion" element={<Informacion />}></Route>
            <Route path="/tachos" element={<Tachos />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
