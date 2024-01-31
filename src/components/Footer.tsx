import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center text-lg-start">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-b border-blue-1900">
        <div className="me-5 d-none lg:block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto text-left lg:text-md-start mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="mb-4">
              <h6 className="text-uppercase font-bold mb-4">
                <i className="fas fa-gem text-blue-100 ml-7"></i>
                SoulBot
              </h6>
              <p className="ml-7">
                Welcome to SoulBOT, a revolutionary mental health app developed by Shivani and Sneha. SoulBOT is designed to provide a holistic approach to well-being by combining advanced generative AI algorithms with personalized features aimed at enhancing communication with therapists.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="text-uppercase font-bold mb-4 ml-7">Features</h6>
              <p>
                <a href="#" className="text-reset ml-7">
                  Voice and Sign Language Communication
                </a>
              </p>
              <p>
                <a href="#" className="text-reset ml-7">
                  Counseling Sessions
                </a>
              </p>
              <p>
                <a href="#" className="text-reset ml-7">
                  User privacy
                </a>
              </p>
              <p>
                <a href="#" className="text-reset ml-7">
                  Therapist Mapping
                </a>
              </p>
            </div>

            <div className="mb-4">
              <h6 className="text-uppercase font-bold mb-4 ml-4">Quick links</h6>
              <p>
                <a href="#" className="text-reset ml-4">
                  Terms of Service
                </a>
              </p>
              <p>
                <a href="#" className="text-reset ml-4">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#" className="text-reset ml-4">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#" className="text-reset ml-4">
                  Help
                </a>
              </p>
            </div>

            <div className="mb-4">
              <h6 className="text-uppercase font-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home text-blue-100 me-2"></i>
                India, Haryana, Faridabad
              </p>
              <p>
                <i className="fas fa-envelope text-blue-100 me-3"></i>
                shivanisharma232005@gmail.com
              </p>
              <p>
                <i className="fas fa-envelope text-blue-100 me-3"></i>
                snehakumari64445@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgb(2,0,121)' }}>
        © 2024 Copyright:
        <a className="text-reset font-bold">
          SoulBot
        </a>
      </div>
    </footer>
  );
};

export default Footer;
