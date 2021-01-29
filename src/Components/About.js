import React, { Component } from "react";
import profile_two from "../assets/profile_two.png";
import "../App.css";

class About extends Component {
  render() {
    return (
      <div className=" container">
        <h1 className="mt-20">About me</h1>

        <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-4">
          <img
            className="w-32 h-32 md:w-48 md:h-48 md:rounded-none rounded-full mx-auto"
            src={profile_two}
            alt="gonzalo_simon"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                I'm based in Cordoba, Argentina currently studying computer
                sicence at Universidad Nacional de Cordoba. I've been coding for
                4 years with JavaScript, I keep doing projects with MERN Stack.{" "}
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-cyan-600">Gonzalo Simon</div>
              <div className="text-gray-500">Software Developer</div>
            </figcaption>
          </div>
        </figure>
      </div>
    );
  }
}

export default About;
