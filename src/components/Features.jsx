import React from "react";
import FeaturesData from "../Data/FeaturesData";
import "./features.css";

const Features = () => {
    const features = FeaturesData.map((feature) => {
        return (
            <div className="feature" key={feature.title}>
                <div className="feature-image">
                    <img src={feature.src} alt={feature.title} />
                </div>
                <h2 className="feature-title">{feature.title}</h2>
                <p className="feature-description">{feature.description}</p>
            </div>
        );
    });
    return <div className="features">{features}</div>;
};

export default Features;
