import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Erreur404 from "./pages/Erreur404";
import Navigation from "./Routes/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Logements from "./pages/Logements";
import Apropos from "./pages/Apropos"


function App() {
  return (
    <div>
      <Navigation />
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
