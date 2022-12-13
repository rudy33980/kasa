import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Erreur404 from "./pages/Erreur404";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Logements from "./pages/Logements";
import Apropos from "./pages/Apropos";
import '../src/App.css';


function App() {
  return (
    <div className="containerTotal">
      <Header />
      <Routes>
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
