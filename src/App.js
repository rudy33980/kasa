import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogements";
import Erreur404 from "./pages/Erreur404";
import NotFounds from "./pages/NotFounds";
import Navigation from "./Routes/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer"
import FicheLogements from "./pages/FicheLogements";


function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/ficheLogements/:id" element={<FicheLogements />} />
        <Route path="/erreur404" element={<Erreur404 />} />
        <Route component={NotFounds} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
