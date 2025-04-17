import React from 'react';
import { Link } from "react-router-dom";
import { blog } from '../content/blog'

const Blog = () => {
    
    return (
        <>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-center mx-auto">
                            {/* <span className="text-primary d-block">Blog</span> */}
                            <h2 className="section-heading">
                                <strong>Why Choose Us</strong>
                            </h2>
                            <p className="mb-5">
                                {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {blog.map((blogs, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="post-entry-1 h-100">
                                    <Link to="#" className="mb-3 d-block">
                                        <img src={blogs.image} alt={blogs.image} className="img-fluid" />
                                    </Link>
                                    <div className="post-entry-1-contents">
                                        <span className="meta d-inline-block">
                                            March 10, 2025 <span className="mx-2">by</span>{" "}
                                            <Link to="#">Admin</Link>
                                        </span>
                                        <h2>
                                            <Link to="#">{blogs.title}</Link>
                                        </h2>
                                        <p>{blogs.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;