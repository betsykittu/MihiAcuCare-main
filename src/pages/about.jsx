import React from 'react';
import { Link } from "react-router-dom";
import { practitioners, aboutContent } from '../content/about';
import heroBg from "../images/hero_bg_1.jpg";
import person_1 from "../images/person_1.jpg";

const about = () => {
    
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
                                <h1 className="text-white">About Us</h1>
                                <Link to="/">Home</Link>{" "}
                                <span className="mx-3 text-white">/</span>{" "}
                                <strong className="text-white">About us</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
                                <img
                                    src={person_1}
                                    alt="person_1"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="col-lg-5 mr-auto">
                                <h2 className="text-black mb-4">Our Philosophy</h2>
                                {aboutContent.philosophy.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <img
                                    src={heroBg}
                                    alt="heroBg"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="col-lg-5 ml-auto">
                                <h2 className="text-black mb-4">Our History</h2>
                                {aboutContent.story.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5 section-2-title">
                            <div className="col-md-6">
                                <h2 className="mb-4">Meet Our Team</h2>
                            </div>
                        </div>
                        <div className="row align-items-stretch">
                            {practitioners.map((practitioner, index) => (
                                <div className="col-lg-4 col-md-6 mb-5" key={index}>
                                    <div className="post-entry-1 h-100 person-1">
                                        <img
                                            src={practitioner.image}
                                            alt={practitioner.image}
                                            className="img-fluid"
                                        />
                                        <div className="post-entry-1-contents">
                                            <span className="meta">{practitioner.title}</span>
                                            <h2>{practitioner.name}</h2>
                                            <p>{practitioner.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about;