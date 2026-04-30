import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CategorieRealisations from "./pages/CategorieRealisations.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/realisations/:type" element={<CategorieRealisations />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;