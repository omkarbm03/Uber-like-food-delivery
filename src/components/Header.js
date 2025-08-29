import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [BtnNameReact, setBtnNameReact] = useState("Login")

    return (
    <div className="header">
        <div className="Logo">
            <img className="img" src="https://images.seeklogo.com/logo-png/40/1/shopee-food-logo-png_seeklogo-405304.png"/> 
        </div>

        <div className="Nav">
            <ul>
                <li>
                    <Link to= "/">Home</Link>
                </li>
                <li>
                    <Link to= "/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact" >Contact Us</Link>
                </li>
                <li>
                    Cart
                </li>
                <button
                className="login"
                onClick={() => {
                    if (BtnNameReact === "Login") {
                        setBtnNameReact("Logout");
                      } else {
                        setBtnNameReact("Login");
                      }
                      
                }}
                >
                {BtnNameReact}
                </button>
            </ul>

        </div>
    </div>

    )
}

export default Header;