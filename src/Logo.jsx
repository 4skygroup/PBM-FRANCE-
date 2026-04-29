import logo from "../public/CYBERSKY.png";

export default function Logo() {
    return (
        <img
            src= {logo}
            alt="PBM France"
            className="h-8 md:h-10 w-auto object-contain"
        />
    );
}