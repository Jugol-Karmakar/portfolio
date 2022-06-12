import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio></Portfolio>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
