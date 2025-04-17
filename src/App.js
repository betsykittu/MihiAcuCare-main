import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
import { HashLoader } from "react-spinners";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import ContactUs from "./components/contactUs";

const Home = lazy(() => import("../src/pages/home"));
const Services = lazy(() => import("../src/pages/services"));
const About = lazy(() => import("../src/pages/about"));
const Contact = lazy(() => import("../src/pages/contact"));

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="loader-container">
          <HashLoader color="#2fc4b2" />
        </div>
      }>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ContactUs />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
