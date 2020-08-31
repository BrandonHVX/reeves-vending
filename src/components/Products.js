import React, { useState } from 'react';
import { Button, Modal, Tab, Tabs } from 'react-bootstrap';
import Chips from '../assets/images/products01.jpg';
import Bevs from '../assets/images/products02.jpg';
import Snacks from '../assets/images/products03.jpg';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body closeButton></Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ChipsModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="btn btn-outline mt-3" onClick={() => setModalShow(true)}>
        <div class="card">
          <div class="card-header-products">
            <img src={Chips} />
          </div>
          <div class="card-body">
            <button className="btn xl btn-primary"> Chips</button>
          </div>
        </div>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <div className="container  ">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        variant="pills"
        onSelect={k => setKey(k)}
      >
        <Tab eventKey="home" title="Chips">
          <div className="container-fluid mt-5">
            <div className="row ">
              <div className="col-md-6 ">
                <div className="tabs-card">
                  {' '}
                  <img src={Chips} className="img-fluid " alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="content">
                  <h2>Chips</h2>
                  Et et consectetur ipsum labore excepteur est proident
                  excepteur ad velit occaecat qui minim occaecat veniam. Fugiat
                  veniam incididunt anim aliqua enim pariatur veniam sunt est
                  aute sit dolor anim. Velit non irure adipisicing aliqua
                  ullamco irure incididunt irure non esse
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Assorted Snacks">
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="tabs-card">
                  {' '}
                  <img src={Snacks} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="content">
                  <h2>Assorted Snacks</h2>
                  Et et consectetur ipsum labore excepteur est proident
                  excepteur ad velit occaecat qui minim occaecat veniam. Fugiat
                  veniam incididunt anim aliqua enim pariatur veniam sunt est
                  aute sit dolor anim. Velit non irure adipisicing aliqua
                  ullamco irure incididunt irure non esse
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="contact" title="Beverages">
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="tabs-card">
                  {' '}
                  <img src={Bevs} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="content">
                  <h2>Beverages</h2>
                  Et et consectetur ipsum labore excepteur est proident
                  excepteur ad velit occaecat qui minim occaecat veniam. Fugiat
                  veniam incididunt anim aliqua enim pariatur veniam sunt est
                  aute sit dolor anim. Velit non irure adipisicing aliqua
                  ullamco irure incididunt irure non esse
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="products-menu">
        <div className="section-heading text-center">
          <h3>Our Products</h3>
          <h2>Quality Selection</h2>
          <p className="text-muted">Check out what we can do for you.</p>
          <hr />
        </div>
        <ControlledTabs />
      </div>
    </section>
  );
}
