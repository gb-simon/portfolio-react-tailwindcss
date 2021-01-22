import React, { Component } from 'react';
import '../App.css';
import '../Responsive.css';
import linkedin from '../assets/linkedin-logo.png'
import email from '../assets/email-logo.png'
import github from '../assets/github-logo.png'
import blog from '../assets/blog-logo.png'

class Footer extends Component {
  state={
    linkedin: linkedin,
    github: github,
    email: email,
    blog: blog
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-statement">
          Contact
        </div>
        <div className="social-links">
          <div className="social">
            <a href="https://www.linkedin.com/in/gonzalo-simon-aguilar/?locale=en_US/" target="_blank" rel="noopener noreferrer">
              <img className="linkedin" src={this.state.linkedin} alt="Linkedin Logo"/>
            </a>
          </div>
          <div className="social">
            <a href="https://www.github.com/gb-simon/" target="_blank" rel="noopener noreferrer">
              <img className="github" src={this.state.github} alt="GitHub Logo"/>
            </a>
          </div>
          <div className="social">
            <a href="mailto:aguilarsimon01@gmail.com" target="_blank" rel="noopener noreferrer">
              <img className="email" src={this.state.email} alt="Email Logo"/>
            </a>
          </div>
          <div className="social-last">
            <a href="https://gonzalosimon.hashnode.dev/" target="_blank" rel="noopener noreferrer">
              <img className="blog" src={this.state.blog} alt="Blog Logo"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
