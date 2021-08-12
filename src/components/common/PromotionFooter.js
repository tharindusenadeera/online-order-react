import React from "react";

export const PromotionFooter = (props) => {
  return (
    <section className="section section-lg dark bg-dark">
      {/* <!-- BG Image --> */}
      <div className="bg-image bg-parallax">
        <img
          src="http://assets.suelo.pl/soup/img/photos/bg-croissant.jpg"
          alt=""
        />
      </div>

      <div className="container text-center">
        <div className="col-lg-8 offset-lg-2">
          <h2 className="mb-3">Would you like to visit Us?</h2>
          <h5 className="text-muted">
            Book a table even right now or make an online order!
          </h5>
          <a href="menu-list-navigation.html" className="btn btn-primary">
            <span>Order Online</span>
          </a>
          <a href="book-a-table.html" className="btn btn-outline-primary">
            <span>Book a table</span>
          </a>
        </div>
      </div>
    </section>
  );
};
