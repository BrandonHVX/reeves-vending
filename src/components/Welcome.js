import React from 'react';
import Scroll from '../components/Scroll';
import fruit from '../assets/images/vending02.png';
import Mbe from '../assets/images/mbe.png';
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
                <span class="display-font-reeves"> Reeves & CO </span>
                <span class="display-font-vending"> Vending Services </span>
                has been established since 2001. We are a family owned company
                providing nothing but the
                <span class="display-font"> Best</span> and
                <span class="display-font"> Healthiest</span>{' '}
                <span class="display-font"> Food and Beverage </span>
                for your convenience. MBE certified company.{' '}
              </h2>
              <img className="justify-space-between" src={Mbe} width={100} />
              {/* <Scroll type="id" element="download">
                <a href="#download" className="btn btn-primary btn-xl">
                  View Our Products
                </a>
              </Scroll> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
