import React from "react";

export const Footer = (props) => {
  return (
    <footer id="footer" className="bg-dark dark">
      <div className="container">
        {/* <!-- Footer 1st Row --> */}
        <div className="footer-first-row row">
          <div className="col-lg-3 text-center">
            <a href="index.html">
              <img
                src="assets/img/logo-light.svg"
                alt=""
                width="88"
                className="mt-5 mb-5"
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-muted">Latest news</h5>
            <ul className="list-posts">
              <li>
                <a href="blog-post.html" className="title">
                  How to create effective webdeisign?
                </a>
                <span className="date">February 14, 2015</span>
              </li>
              <li>
                <a href="blog-post.html" className="title">
                  Awesome weekend in Polish mountains!
                </a>
                <span className="date">February 14, 2015</span>
              </li>
              <li>
                <a href="blog-post.html" className="title">
                  How to create effective webdeisign?
                </a>
                <span className="date">February 14, 2015</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-5 col-md-6">
            <h5 className="text-muted">Subscribe Us!</h5>
            {/* <!-- MailChimp Form --> */}
            <form
              action="//suelo.us12.list-manage.com/subscribe/post-json?u=ed47dbfe167d906f2bc46a01b&amp;id=24ac8a22ad"
              id="sign-up-form"
              className="sign-up-form validate-form mb-5"
              method="POST"
            >
              <div className="input-group">
                <input
                  name="EMAIL"
                  id="mce-EMAIL"
                  type="email"
                  className="form-control"
                  placeholder="Tap your e-mail..."
                  required
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary btn-submit" type="submit">
                    <span className="description">Subscribe</span>
                    <span className="success">
                      <svg x="0px" y="0px" viewBox="0 0 32 32">
                        <path
                          stroke-dasharray="19.79 19.79"
                          stroke-dashoffset="19.79"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-width="2"
                          stroke-linecap="square"
                          stroke-miterlimit="10"
                          d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"
                        />
                      </svg>
                    </span>
                    <span className="error">Try again...</span>
                  </button>
                </span>
              </div>
            </form>
            <h5 className="text-muted mb-3">Social Media</h5>
            <a
              href="#"
              className="icon icon-social icon-circle icon-sm icon-facebook"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="#"
              className="icon icon-social icon-circle icon-sm icon-google"
            >
              <i className="fa fa-google"></i>
            </a>
            <a
              href="#"
              className="icon icon-social icon-circle icon-sm icon-twitter"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="#"
              className="icon icon-social icon-circle icon-sm icon-youtube"
            >
              <i className="fa fa-youtube"></i>
            </a>
            <a
              href="#"
              className="icon icon-social icon-circle icon-sm icon-instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        {/* <!-- Footer 2nd Row --> */}
        <div className="footer-second-row">
          <span className="text-muted">
            Copyright Soup 2020©. Made with love by Suelo.
          </span>
        </div>
      </div>

      {/* <!-- Back To Top --> */}
      <button id="back-to-top" className="back-to-top">
        <i className="ti ti-angle-up"></i>
      </button>
    </footer>
  );
};
