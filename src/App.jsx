import Navbar from "./components/Navbar"
import Hero from "./components/Hero.jsx";
import ListeZones from "./components/zones/ListeZones.jsx";
import ListeServices from "./components/services/ListeServices.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <ListeZones />
            <ListeServices />
        </>
    )
}

export default App