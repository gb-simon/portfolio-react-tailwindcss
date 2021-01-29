import React, { Component } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import "../App.css";

class Main extends Component {
  render() {
    return (
      <div className="body">
        <div className="background-img">
          <div className="nav">
            <div id="contact" className="contact-section">
              <div>
                <h1 className="text-6xl">Gonzalo Simon</h1>
                <div className="hero container max-w-screen-lg mx-auto pb-10">
                  <img
                    src={profile}
                    alt="Profile"
                    className="mx-auto rounded-full h-48 w-48 mb-8 mt-8 flex items-center justify-center"
                  />
                </div>
                <p>Full-Stack Developer</p>
                <i className="fas fa-map-marker-alt"></i> Córdoba, Argentina
              </div>
              <div className="contact-links">
                {/* <Link to="/projects" className="btn contact-details">
                  Projects
                </Link>
                <Link to="/articles" className="btn contact-details">
                  Articles
                </Link>
                <Link to="/contact" className="btn contact-details">
                  Contact
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
