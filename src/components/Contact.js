import React from 'react';

export default function Contact() {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="section-heading text-center">
          <h2>Contact Us</h2>
          <p className="text-muted">Check out what we can do for you.</p>
          <hr />
        </div>
        <div class="thm-container">
          <div class="row">
            <div class="col-md-8">
              <div class="contact-form-content">
                <div class="title">
                  <h2>Send Message</h2>
                </div>
                <form
                  action="inc/sendemail.php"
                  class="contact-form"
                  novalidate="novalidate"
                >
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
            <div class="col-md-4">
              <div class="contact-info text-center">
                <div class="title text-center"></div>
                <div class="single-contact-info">
                  <h4>Address</h4>
                  <p>
                    88 New Street, St Louis MO <br /> United States, America
                  </p>
                </div>
                <div class="single-contact-info">
                  <h4>Phone</h4>
                  <p>
                    Local: 222 999 888 <br /> Mobile: 000 8888 999
                  </p>
                </div>
                <div class="single-contact-info">
                  <h4>Email</h4>
                  <p>
                    needhelp@printify.com <br /> inquiry@printify.com
                  </p>
                </div>
                <div class="single-contact-info">
                  <h4>Follow</h4>
                  <div class="social">
                    <a href="#" class="fab fa-twitter "></a>
                    <a href="#" class="fab fa-pinterest "></a>
                    <a href="#" class="fab fa-facebook-f "></a>
                    <a href="#" class="fab fa-youtube "></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
