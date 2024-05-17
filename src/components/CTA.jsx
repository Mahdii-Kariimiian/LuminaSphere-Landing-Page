import { Link } from "react-router-dom";
import "./cta.css";

const CTA = () => {
    return (
        <Link to="/purchase" className="cta-button">
            Buy Your Lumina
        </Link>
    );
};

export default CTA;
