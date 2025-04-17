import React from 'react';
import { Link } from "react-router-dom";
import { service } from '../content/service';
import Service from "../components/service";
import Blog from "../components/blog";
import heroBg from "../images/hero_bg_1.jpg";

function Home() {
    
    return (
        <div className="App">
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
                                <h1 className="text-white">
                                    Welcome to <strong className="text-primary"> Mihi Acu Care. </strong>
                                </h1>
                                <div className="desc">
                                    Experience the healing power of traditional acupuncture.
                                </div>
                                <div className="col-lg-12">
                                    <Link to="/services" className="btn btn-primary custom-space">
                                        Our Services
                                    </Link>
                                    <Link to="/contact" className="btn btn-primary btn-white custom-space">
                                        Book an Appointment
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service */}
                <Service />
                {/* Service */}

                {/* Blog */}
                <Blog />
                {/* Blog */}

                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 text-center mx-auto">
                                {/* <span className="text-primary d-block">Blog</span> */}
                                <h2 className="section-heading">
                                    <strong>Our Services</strong>
                                </h2>
                                <p className="mb-5">
                                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}
                                </p>
                            </div>
                        </div>
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
        </div>
    );
}

export default Home;
