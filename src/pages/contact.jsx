import React, { useState } from 'react';
import { Link } from "react-router-dom";
import heroBg from "../images/hero_bg_1.jpg";

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

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
                <h1 className="text-white">Contact Us</h1>
                <p className="text-white">Schedule your appointment or ask us any questions</p>
                <Link to="/">Home</Link>{" "}
                <span className="mx-3 text-white">/</span>{" "}
                <strong className="text-white">Contact</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section bg-light" id="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5">
                <form onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <div className="col-md-6 mb-4 mb-lg-0">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <small className="text-danger">{errors.phone}</small>}
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Write your message."
                        cols={30}
                        rows={10}
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && <small className="text-danger">{errors.message}</small>}
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-6 mr-auto">
                      <input
                        type="submit"
                        className="btn btn-block btn-primary text-white py-3 px-5"
                        value="Send Message"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 ml-auto">
                <div className="bg-white p-3 p-md-5">
                  <h3 className="text-black mb-4">Contact Info</h3>
                  <ul className="list-unstyled footer-link">
                    <li className="d-block mb-3">
                      <span className="d-block text-black">Address:</span>
                      <span>34 Street Name, City Name Here, United States</span>
                    </li>
                    <li className="d-block mb-3">
                      <span className="d-block text-black">Phone:</span>
                      <span>+1 242 4942 290</span>
                    </li>
                    <li className="d-block mb-3">
                      <span className="d-block text-black">Email:</span>
                      <span>info@yourdomain.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;