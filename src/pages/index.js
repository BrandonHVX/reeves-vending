import React from 'react';
import { Button, Modal, Tab, Tabs } from 'react-bootstrap';
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
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

function ProgramModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div>
          <div class="contact-form-content">
            <div class="title">
              <h2>Interested in our Partnership Program?</h2>
              <p>
                Contact us to learn more about our partnership program today.
              </p>
            </div>
            <form
              class="contact-form"
              action="/success"
              name="reeves-website"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              novalidate
            >
              <input type="hidden" name="form-name" value="reeves-website" />
              <input type="text" name="name" placeholder="Your full name" />
              <input
                type="text"
                name="email"
                placeholder="Your email address"
              />
              <textarea
                name="message"
                placeholder="What you are looking for?"
              ></textarea>
              <button type="submit" className="btn btn-primary btn-xl">
                Submit Now
              </button>
              <div class="form-result"></div>
            </form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ProgramButton() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="btn btn-secondary py-3 px-4"
        onClick={() => setModalShow(true)}
      >
        Inquire
      </Button>

      <ProgramModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div>
          <div class="contact-form-content">
            <div class="title">
              <h2>Vending Machine For Your Business?</h2>
              <p>Contact us to learn more about vending sales today.</p>
            </div>
            <form
              class="contact-form"
              action="/success"
              name="reeves-website"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              novalidate
            >
              <input type="hidden" name="form-name" value="reeves-website" />
              <input type="text" name="name" placeholder="Your full name" />
              <input
                type="text"
                name="email"
                placeholder="Your email address"
              />
              <textarea
                name="message"
                placeholder="What you are looking for?"
              ></textarea>
              <button type="submit" className="btn btn-primary btn-xl">
                Submit Now
              </button>
              <div class="form-result"></div>
            </form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function InquireButton() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="btn btn-primary-inquire py-3 px-4"
        onClick={() => setModalShow(true)}
      >
        Inquire
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

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
                Our unique vending machines are designed to fit your every need.
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

    <div class=" ftco-no-pt ftco-no-pb ftco-volunteer">
      <div class="container">
        <div class="row">
          <div class="col-md-7 img-volunteer">
            <div class="row no-gutters justify-content-end">
              <div class="col-lg-8">
                <div class="text py-5  pl-md-5 pr-md-4">
                  <h2 class="mb-4">Vending Machine For Your Business?</h2>
                  <p>Contact us to learn more about vending sales today.</p>
                  <p>
                    <InquireButton />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5  d-flex align-items-center ftco-mission ">
            <div class="about-text py-5 pl-md-3">
              <h2>Partnership Program</h2>
              <p>
                Our team has put together a program that would allow you to
                instantly come aboard as a partner with our streamlined process.
                Contact our sales team for additional information.
              </p>
              <p>
                <ProgramButton />
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
