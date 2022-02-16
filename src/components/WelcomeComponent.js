import React from 'react';
import { NavLink } from 'react-router-dom';

function Welcome() {
    return (
        <div className="container-fluid align-items-center">
            <div className="row d-flex my-auto">
                <div className="col-12 text-center">
                    <h1>Welcome. My Name is Greg.</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <h3>Developer, Programmer, Creator.</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                    <NavLink className="nav-link" to="/about">
                        <h5>About</h5>
                    </NavLink>
                    <NavLink className="nav-link" to="/projects">
                        <h5>Projects</h5>
                    </NavLink>
                    <NavLink className="nav-link" to="/contact">
                        <h5>Contact</h5>
                    </NavLink>
            </div>
        </div>
    );
}

export default Welcome;