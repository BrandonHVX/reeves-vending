import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Why from '../components/Why';
import Contact from '../components/Contact';
import Products from '../components/Products';
import Welcome from '../components/Welcome';
import Social from '../components/Social';
import Slide from '../assets/images/SLIDE_01.jpg';
import Bg from '../assets/images/bg-vending.jpg';
import Vending from '../assets/images/vending04.png';
import HeroImg from '../assets/images/vending03.png';
import demo1 from '../assets/images/demo-screen-1.jpg';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';

const bgImage = {
  backgroundImage: `url(${Vending})`,
};
const aboutImage = {
  backgroundImage: `url(${demo1})`,
  dataStellarBackgroundRatio: '0.5',
};

const IndexPage = () => (
  <Layout>
    <Header />
    <div class="parallax"></div>

    <div class="masthead">
      <div className="overlay" />
      <div className="container h-100">
        <div className="row h-100 ">
          <div className="col-lg-5  my-auto order-2 order-lg-1">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Our exclusive and unique vending machines are designed to fit
                your any and every need.
              </h1>
              <Scroll type="id" element="download">
                <a href="#download" className="btn btn-primary btn-xl">
                  Learn More
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-7 my-auto order-1 order-lg-2">
            <div className="device-container">
              <div className="device">
                <div className="screen mt-2">
                  <img src={HeroImg} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ftco-section ftco-no-pt ftco-no-pb ftco-volunteer">
      <div class="container">
        <div class="row">
          <div class="col-md-7 img-volunteer">
            <div class="row no-gutters justify-content-end">
              <div class="col-lg-8">
                <div class="text py-5  pl-md-5 pr-md-4">
                  <h2 class="mb-4">Vending Machine For Your Business?</h2>
                  <p>Contact us to learn more about vending sales today.</p>
                  <p>
                    <a href="#" class="btn btn-primary py-3 px-4">
                      Inquire
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5  d-flex align-items-center ftco-mission ">
            <div class="about-text py-5 pl-md-3">
              <h2>Current Locations</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics
              </p>
              <p>
                <a href="#" class="btn btn-primary py-3 px-4">
                  View
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Welcome />
    <Why />
    <Products />

    {/* <div className="newsletter">
      <div className="section-heading text-center">
        <h2>Subscribe To Our Newsletter</h2>
        <p className="text-muted">Check out what we can do for you.</p>
        <hr />
      </div>
      <div class="container newsletter">
        <div class="row">
          <div class="col-sm-12">
            <div class="content">
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your email"
                />
                <span class="input-group-btn">
                  <button class="btn" type="submit">
                    Subscribe Now
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    <Contact />

    <Footer />
  </Layout>
);

export default IndexPage;
