import React from "react";

const Header = () => {
    return(
        <>
                <a href="#" className="navbar-brand">Landing Page</a>

        <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            >
            <span className="navbar-toggler-icon"></span>
            </button>


        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
        </>

    );
}

export default Header