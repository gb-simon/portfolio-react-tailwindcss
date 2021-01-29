import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-white relative pt-1 border-b-2 border-blue-700">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 uppercase mb-2">
                  Contact Me
                </span>

                <span className="my-2">
                  <a
                    href="mailto:aguilarsimon01@gmail.com"
                    className="text-blue-700 text-md hover:text-blue-500"
                  >
                   e-mail
                  </a>
                  <p className="text-black text-base">
                  aguilarsimon01@gmail.com
                  </p>
                </span>
                <span className="my-2">
                  <a
                    href="https://www.linkedin.com/in/gonzalo-simon-aguilar/"
                    className="text-blue-700 text-md hover:text-blue-500"
                  >
                    Linkedin
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="https://github.com/gb-simon"
                    className="text-blue-700 text-md hover:text-blue-500"
                  >
                    GitHub
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                  Footer header 2
                </span>
                <span className="my-2">
                  <a href="#" className="text-blue-700 text-md hover:text-blue-500">
                  Curriculum Vitae
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-blue-700  text-md hover:text-blue-500"
                  >
                    Certification
                  </a>
                </span>
                <span className="my-2">
                  <a href="https://drive.google.com/file/d/1OQULoHEVpPO02y1rDZCgYyJULCK9LSv7/view?usp=sharing" className="text-blue-700 text-md hover:text-blue-500">
                    My Blog
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-16 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <p>© 2021 by Gonzalo Simon</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
