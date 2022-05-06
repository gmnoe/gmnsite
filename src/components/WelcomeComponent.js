import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

function Welcome() {
    return (
        <div className="container-fluid welcome">
            <div className="row">
                <div className="col text-center fade-in-text">
                    <h1 id="name">Greg Noethlich</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center fade-in-text">
                    <h3>Developer, Programmer, Creator.</h3>
                </div>
            </div>
            <div className="row justify-content-center fade-in-text">
                    <NavLink className="nav-link" to="/about">
                        <Button>
                            <h5>About</h5>
                        </Button>
                    </NavLink>
                    <NavLink className="nav-link" to="/skills">
                        <Button>
                            <h5>My Skills</h5>
                        </Button>
                    </NavLink>
                    <NavLink className="nav-link" to="/projects">
                        <Button>
                            <h5>Projects</h5>
                        </Button>
                    </NavLink>
                    <NavLink className="nav-link" to="/contact">
                        <Button>
                            <h5>Contact</h5>
                        </Button>
                    </NavLink>
            </div>
        </div>
    );
}

export default Welcome;