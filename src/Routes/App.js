import { Routes, Route } from "react-router-dom";
import Home from "../layout/Home";
import Erreur404 from "../layout/Erreur404";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Logements from "../layout/Logements";
import Apropos from "../layout/Apropos";


function App() {
  return (
    <div className="containerTotal">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Logements/:id" element={<Logements />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <Footer />
  
    </div>
  );
}

export default App;
