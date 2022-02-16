import React from 'react';
import { NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer fixed-bottom">
            <div className="container-fluid mx-auto">
                <div className="row footer">             
                    <div className="col-6 col-sm-3 mx-auto text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;