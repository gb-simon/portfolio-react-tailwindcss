import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main.js";
import Projects from "./Components/Projects.js";
import About from "./Components/About.js";
import Articles from "./Components/Articles.js";
import Footer from "./Components/Footer.js";

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <About />
        <Projects />
        <Articles />
        <Footer />
        {/* // <Router>
         <Route exact path="/" component={Main} />
         <Route path="/projects" component={Projects} />
         <Route path="/articles" component={Articles} />
         <Route path="/contact" component={About} />
         <Footer />
      </Router> */}
      </div>
    );
  }
}

export default App;
