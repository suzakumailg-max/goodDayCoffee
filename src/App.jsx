import { Route, Routes, Link } from "react-router-dom";
import Top from "./Pages/Top";
import Coffee from "./pages/Coffee";
import Contact from "./pages/Contact";
import Barista from "./pages/Barista";
import Menu from "./pages/Menu";

import Footer from "./components/Layout/Footer/Footer.jsx"
import Aside from "./components/Layout/Aside/Aside.jsx";
import Header from "./components/layout/Header/Header";

function App() {
  return (
    <>
      <Header />

        <Routes>
          <Route path="/" element={<Top />} />
            <Route path="/coffee" element={<Coffee />} />
            <Route path="/barista" element={<Barista />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Aside />
        <Footer />
      </>
  );
}

export default App;