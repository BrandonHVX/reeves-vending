import React from 'react';
import Scroll from '../components/Scroll';
import fruit from '../assets/images/vending02.png';

export default function Welcome() {
  return (
    <section className="welcome" id="welcome">
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
              <h2 className="mb-5">
                {' '}
                Reeves & Co. Vending Services provides healthy snacks and
                beverages to
                <span class="display-font">
                  {' '}
                  Businesses, Schools and other Facilities in
                </span>{' '}
                of the St.Louis metropolitan area.
              </h2>
              <Scroll type="id" element="download">
                <a href="#download" className="btn btn-primary btn-xl">
                  View Our Products
                </a>
              </Scroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
