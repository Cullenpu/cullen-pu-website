import React, { Component } from "react";
import { Link } from "react-scroll";

import "./styles.css";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron-fluid bg-dark" id="home">
        <div className="container text-center">
          <div className="greeting">
            <h1 className="text-monospace text-light display-3">
              hi, i'm cullen!
            </h1>
            <h5 className="text-monospace text-light">
              i'm a student, software dev, photographer
            </h5>
          </div>
          <Link
            className="btn btn-outline-light text-monospace text-light"
            // activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-56}
            duration={300}
          >
            view my work
          </Link>
          <div className="row links">
            <div className="col-sm">
              <a href="https://www.linkedin.com/in/cullenpu/" target="_blank">
                <i class="fab fa-linkedin fa-2x text-light"></i>
              </a>
            </div>
            <div className="col-sm">
              <a href="https://github.com/Cullenpu/" target="_blank">
                <i className="fab fa-github fa-2x text-light"></i>
              </a>
            </div>
            <div className="col-sm">
              <a href="https://instagram.com/cpviews/" target="_blank">
                <i class="fab fa-instagram fa-2x text-light"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
