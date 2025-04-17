import React from 'react'
import { Link, useLocation } from "react-router-dom";

const ContactUs = () => {

    const location = useLocation(); 

    if (location.pathname === "/contact") {
        return null;
    }

    return (
        <>
            <div className="site-section bg-primary py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-4 mb-md-0">
                            <h2 className="mb-0 text-white">What are you waiting for?</h2>
                            <p className="mb-0 opa-7">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.
                            </p>
                        </div>
                        <div className="col-lg-5 text-md-right">
                            <Link to="/contact" className="btn btn-primary btn-white">
                                Book an Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;