import React from 'react';
import { Link } from 'gatsby';
import { Button, Modal, Tab, Tabs } from 'react-bootstrap';
import Layout from '../components/Layout';
import styles from './blog.module.css';
import VendingLogo from '../assets/images/vending-logo.png';

const IndexPage = () => (
  <Layout>
    <section className="success">
      <div className="container">
        {' '}
        <div className="success-menu mt-5">
          <div className="section-heading-success text-center">
            <img src={VendingLogo} alt="" width={300} />
            <h3>Success</h3>
            <h2>Your Message Has Been Sent!</h2>
            <p className="text-muted">Thank You.</p>
            <hr />
          </div>
          <div class="text-center">
            <Link to="/" className="btn btn-primary py-3 px-4 ">
              Back To Home
            </Link>
          </div>
        </div>
      </div>{' '}
    </section>
  </Layout>
);

export default IndexPage;
