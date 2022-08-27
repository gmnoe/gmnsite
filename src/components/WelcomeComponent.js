import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

function Welcome() {
    return (
        <div className="container-fluid welcome">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 id="name">Greg</h1>
                </div>
                <div className="col-12 text-center">
                    <h1 id="name">Noethlich</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <h3 id="titles">Developer, Programmer, Creator.</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="text-center col-lg-2 col-sm-4 col-12">
                    <NavLink className="nav-link" to="/about">
                        <Button>
                            <h5>About</h5>
                        </Button>
                    </NavLink>
                </div>
                <div className="text-center col-lg-2 col-sm-4 col-12">
                    <NavLink className="nav-link" to="/skills">
                        <Button>
                            <h5>Skills</h5>
                        </Button>
                    </NavLink>
                </div>
                <div className="text-center col-lg-2 col-sm-4 col-12">
                    <NavLink className="nav-link" to="/projects">
                        <Button>
                            <h5>Projects</h5>
                        </Button>
                    </NavLink>
                </div>
                <div className="text-center col-lg-2 col-sm-4 col-12">
                    <NavLink className="nav-link" to="/contact">
                        <Button>
                            <h5>Contact</h5>
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Welcome;