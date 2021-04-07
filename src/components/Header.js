import React, { Component } from 'react';
import config from '../../config';
import Scroll from './Scroll';
import VendingLogo from '../assets/images/vending-logo.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <div>
        <nav
          className={`navbar fixed-top navbar-icon-top navbar-expand-lg 
          ${visibilityClass}`}
          id="topNav"
        >
          <div className="container">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="navbar-nav collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
              </ul>
              <a
                href="mailto:info@reevesvending.com"
                class="top-phone my-2 my-sm-0 mr-5"
                type="submit"
              >
                <i class="phone-icon fa fa-envelope"></i> info@reevesvending.com
              </a>
              <a class="top-phone my-2 my-sm-0" type="submit">
                <i class="phone-icon fa fa-phone-alt"></i> Call Us Today
              </a>
            </div>
          </div>
        </nav>
        <nav
          className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              <img src={VendingLogo} className="img-fluid" alt="" />
            </a>
            <button
              onClick={_ => this.toggleMenu(!openMenu)}
              className={`navbar-toggler btn-primary navbar-toggler-right ${
                openMenu ? '' : 'collapsed'
              }`}
              type="button"
              aria-controls="navbarResponsive"
              aria-expanded={openMenu}
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars ml-2"></i>
            </button>

            <div
              className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
              id="navbarResponsive"
            >
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Scroll
                    onClick={_ => this.toggleMenu(!openMenu)}
                    type="id"
                    element="why"
                  >
                    <a className="nav-link" href="why">
                      About
                    </a>
                  </Scroll>
                </li>
                <li className="nav-item">
                  <Scroll
                    onClick={_ => this.toggleMenu(!openMenu)}
                    type="id"
                    element="products"
                  >
                    <a className="nav-link" href="#products">
                      Products
                    </a>
                  </Scroll>
                </li>

                <li className="nav-item">
                  <Scroll
                    onClick={_ => this.toggleMenu(!openMenu)}
                    type="id"
                    element="contact"
                  >
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </Scroll>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
