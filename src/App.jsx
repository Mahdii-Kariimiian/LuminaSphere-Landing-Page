import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Purchase from "./components/Purchase";
import ContactPage from "./components/ContactPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="Purchase" element={<Purchase />} />
                <Route path="contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
