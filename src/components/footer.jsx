import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    
    return (
        <>
            <footer className="site-footer py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-center quick-contact-info">
                                <div className="mb-3 icon-wrap">
                                    <Link to="tel:18001234902">
                                        <span className="icon-phone" />
                                    </Link>
                                </div>
                                <span className="caption">
                                    <Link to="tel:18001234902">1-800-1234-902</Link>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center quick-contact-info">
                                <div className="mb-3 icon-wrap">
                                    <Link
                                        to="https://www.google.com/maps?q=2130+Fulton+Street+San+Diego,+CA+94117-1080+USA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="icon-room" />
                                    </Link>
                                </div>
                                <span className="caption">
                                    <Link
                                        to="https://www.google.com/maps?q=2130+Fulton+Street+San+Diego,+CA+94117-1080+USA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        2130 Fulton Street San Diego, CA 94117-1080 USA
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center quick-contact-info">
                                <div className="mb-3 icon-wrap">
                                    <Link to="mailto:info@mydomain.com">
                                        <span className="icon-envelope-o" />
                                    </Link>
                                </div>
                                <span className="caption">
                                    <Link to="mailto:info@mydomain.com">info@mydomain.com</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-lg-12 text-lg-center">
                            <p>
                                Copyright © All rights reserved | {new Date().getFullYear()}{" "}
                                <Link to="/" target="_blank">
                                    Mihi AcuCare
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
