import { useState } from "react";
import "./purchase.css";
import { Link } from "react-router-dom";

const Purchase = () => {
    const [count, setCount] = useState(1);
    const price = 16.99;

    const handleUp = () => {
        setCount(count + 1);
    };

    const handleDown = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="purchase">
            <div className="background"></div>
            <img
                className="purchase-image"
                src="./images/compact and portable.webp"
                alt=""
            />
            <div className="purchase-info">
                <h1 className="purchase-title">LuminaSPHERE</h1>
                <div className="purchase-count">
                    <button onClick={handleDown} className="count-button">
                        -
                    </button>
                    <div className="count">{count}</div>
                    <button onClick={handleUp} className="count-button">
                        +
                    </button>
                </div>
                <p className="purchase-price">
                    Price : <span>{(price * count).toFixed(2)}</span>
                </p>
                <button className="purchase-button">Buy</button>
                <Link to=".." className="purchase-back">
                    Back
                </Link>
            </div>
        </div>
    );
};

export default Purchase;
