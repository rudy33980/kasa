import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Erreur404 from "./pages/Erreur404";
import Apropos from "./pages/Apropos";
import Navigation from "./Routes/Navigation";

// function EquipementLog() {
//   // Get the userId param from the URL.
//   let { userId } = useParams();
//   console.log(userId);
//   // ...
// }

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/erreur404" element={<Erreur404 />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/*" element={<Apropos />} />
      </Routes>
    </div>
  );
}

export default App;
