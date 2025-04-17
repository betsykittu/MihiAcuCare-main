import React from 'react';
import { Link } from "react-router-dom";

const Service = () => {
    
    return (
        <>
            <div className="services">
                <div className="container-fluid px-0">
                    <div className="row no-gutters align-items-stretch">
                        <div className="col-6 col-sm-6 col-md col-lg h-100">
                            <Link to="#" className="service">
                                <div className="icon-wrap">
                                    <span className="flaticon-acupuncture-2" />
                                </div>
                                <h3>Acupuncture</h3>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-6 col-md col-lg h-100">
                            <Link to="#" className="service">
                                <div className="icon-wrap">
                                    <span className="flaticon-therapy" />
                                </div>
                                <h3>Therapy</h3>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-6 col-md col-lg h-100">
                            <Link to="#" className="service">
                                <div className="icon-wrap">
                                    <span className="flaticon-acupuncture-1" />
                                </div>
                                <h3>Foot</h3>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-6 col-md col-lg h-100">
                            <Link to="#" className="service">
                                <div className="icon-wrap">
                                    <span className="flaticon-herbal" />
                                </div>
                                <h3>Natural</h3>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-6 col-md col-lg h-100">
                            <Link to="#" className="service">
                                <div className="icon-wrap">
                                    <span className="flaticon-acupuncture" />
                                </div>
                                <h3>Healing</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;