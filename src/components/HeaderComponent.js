import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            isNavOpen: false,
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="sm">
                    <div className="container-fluid">
                    {/* <NavbarBrand className="mr-auto" href="/">GN</NavbarBrand> */}
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mx-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/welcome">
                                        <h5>Home</h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <h5>About</h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/projects">
                                        <h5>Projects</h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to="/contact">
                                        <h5>Contact</h5>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;