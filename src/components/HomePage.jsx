import { Link } from "react-router-dom";
import Features from "./Features";
import "./homepage.css";
import CTA from "./CTA";

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="flex-hero">
                <div className="hero">
                    <h1 className="homepage-title">
                        <span>L</span>
                        <span>u</span>
                        <span>m</span>
                        <span>i</span>
                        <span>n</span>
                        <span>a</span>
                        <span>S</span>
                        <span>P</span>
                        <span>H</span>
                        <span>E</span>
                        <span>R</span>
                        <span>E</span>
                    </h1>
                    <h3 className="homepage-subtitle">
                        Elevate Your Lighting Experience
                    </h3>
                    <p className="homepage-description">
                        LuminaSphere is a revolutionary smart lighting system
                        designed to transform any space into an immersive visual
                        experience. With its advanced features and customizable
                        settings, LuminaSphere redefines how you interact with
                        light.
                    </p>
                    <Link to="signup" className="homepage-signup-button">
                        Sign up
                    </Link>
                    <CTA />
                </div>
                <div className="lumina-transparent">
                    <img src="./images/LuminaTransparent.png" alt="" />
                </div>
            </div>
            <div className="homepage-features">
                <h2 className="homepage-features-title">
                    Some of the numerous Features
                </h2>
                <Features />
            </div>
            <div className="contact">
                <Link className="homepage-contact" to="contact">
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
