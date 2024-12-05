import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/Google-Logo.wine (1).svg';


const Header = () => {
    return (
        <>
        <header className="header">
            <nav className="menu">
                <div></div>
                <Link to='https://www.google.com/'><img className="menu_logo" src={logo} alt="Google Logo"/></Link>
                <div>
                    <button>
                        Travel
                    </button>
                    <button>
                        Explore
                    </button>
                    <button>
                        Flights
                    </button>
                    <button>
                        Hotels
                    </button>
                    <button>
                        Vacation Rentals
                    </button>
                </div>
                <div>
                    
                </div>

            </nav>
        </header>
        </>
    )
};

export default Header;