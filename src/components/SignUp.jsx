import { useState } from "react";
import "./signup.css";
import CTA from "./CTA";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupData);
        setSignupData({
            name: "",
            email: "",
        });
    };
    return (
        <div className="signup">
            <div className="background"></div>
            <div>
                <h2 className="signup-title">Sign up for more Information</h2>
                <p className="signup-description">
                    You will get further details about LuminaSPHERE in your
                    Email
                </p>

                <form className="form" onSubmit={handleSubmit}>
                    <label className="label">Name</label>
                    <input
                        onChange={handleChange}
                        className="input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={signupData.name}
                    />
                    <label className="label">Email</label>
                    <input
                        onChange={handleChange}
                        className="input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={signupData.email}
                    />

                    <button className="signup-button">Submit</button>
                </form>
            </div>
            <CTA />

            <Link to=".." className="signup-back">
                Back
            </Link>
        </div>
    );
};

export default SignUp;
