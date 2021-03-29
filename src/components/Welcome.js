import React from 'react';
import Scroll from '../components/Scroll';
import fruit from '../assets/images/vending02.png';
import Mbe from '../assets/images/mbe.png';
export default function Welcome() {
  return (
    <section className="welcome" id="welcome">
      <div className="section-heading text-center mb-5">
        <h3>Our Story</h3>
        <h2>Reeves & Co. Vending</h2>
        <p className="text-muted">Check out our story and learn about us.</p>
        <hr />
      </div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="screen">
                <img src={fruit} width={600} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 my-auto">
            <div className="welcome-content mx-auto">
              Reeves & Co. Vending Services
              <span class="display-font-vending">
                {' '}
                has been established since 2001. We are a family owned business
                that provides convenience to and
              </span>
              <span class="display-font"> healthy snacks</span> and
              <span class="display-font"> beverages </span> through vending
              services. MBE certified company.{' '}
              {/* <Scroll type="id" element="download">
                <a href="#download" className="btn btn-primary btn-xl">
                  View Our Products
                </a>
              </Scroll> */}
            </div>
            <img className="justify-space-between" src={Mbe} width={100} />
          </div>
        </div>
      </div>
    </section>
  );
}
