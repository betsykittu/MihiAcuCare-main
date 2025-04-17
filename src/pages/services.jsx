import React from 'react';
import { Link } from "react-router-dom";
import { service } from '../content/service';
import Service from "../components/service";
import heroBg from "../images/hero_bg_1.jpg";

const services = () => {
    
    return (
        <>
            <div className="site-wrap" id="home-section">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle" />
                        </div>
                    </div>
                    <div className="site-mobile-menu-body" />
                </div>
                <div className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-8 intro text-center">
                                <h1 className="text-white">Our Services</h1>
                                <p className='text-white'>Professional acupuncture treatments tailored to your needs</p>
                                <Link to="/">Home</Link>{" "}
                                <span className="mx-3 text-white">/</span>{" "}
                                <strong className="text-white">Services</strong>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service */}
                <Service />
                {/* Service */}
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            {service.map((services, index) => (
                                <div className="col-lg-6 mb-4" key={index}>
                                    <Link to="#" className="d-flex service-2">
                                        <div className="icon-wrap">
                                            <span className={services.icon} />
                                        </div>
                                        <div className="contents">
                                            <h3>{services.title}</h3>
                                            <p>{services.description}!</p>
                                            <div className="d-flex justify-content-between">
                                                <span>Duration: {services.duration} </span>
                                                <span>{services.price}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default services;