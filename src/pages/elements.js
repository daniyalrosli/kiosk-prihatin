import React, { Fragment } from "react";
import { Link } from 'react-router-dom'; // Example import for React Router



function Elements() {


    return (
        
        < Fragment>
        
        
        
        
<>
  <div id="preloader-active">
    <div className="preloader d-flex align-items-center justify-content-center">
      <div className="preloader-inner position-relative">
        <div className="preloader-circle" />
        <div className="preloader-img pere-text">
          <img src="assets/img/logo/k2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* Preloader Start */}
  <header>
    {/* Header Start */}
    <div className="header-area">
      <div className="main-header ">
        <div className="header-top d-none d-lg-block">
          <div className="container-fluid">
            <div className="col-xl-12">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="header-info-left d-flex">
                  <ul>
                    <li>Phone: 60 109089373</li>
                    <li>Email: kioskprihatin@gmail.com</li>
                  </ul>
                  <div className="header-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/sai4ull">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-info-right d-flex align-items-center">
                  <div className="select-this">
                   
                  </div>
                  <ul className="contact-now">
                    <li>
                      <a href="#">Subscribe Now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom  header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/img/logo/k2.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10">
                <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                  {/* Main-menu */}
                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/volunteer">volunteer</Link>
                        </li>
                        <li>
                          <Link to="/events">social events </Link>
                        </li>
                        <li>
                          <Link to="/elements">Blog</Link>
                        </li>
                        <li>
                          <Link to="/contact">contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* Header-btn */}
                  <div className="header-right-btn d-none d-lg-block ml-20">
                    <Link to="donate" className="btn header-btn">
                      Donate
                    </Link>
                  </div>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Header End */}
  </header>
  <main>
    {/*? Hero Start */}
    <div className="slider-area2">
      <div className="slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap hero-cap2 pt-70 text-center">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Hero End */}
    {/*? Blog Area Start*/}
    <section className="blog_area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="blog_left_sidebar">
              <article className="blog_item">
                <div className="blog_item_img">
                  <img
                    className="card-img rounded-0"
                    src="assets/img/blog/single_blog_1.png"
                    alt=""
                  />
                  <a href="#" className="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                  </a>
                </div>
                <div className="blog_details">
                  <a className="d-inline-block" href="blog_details.html">
                    <h2 className="blog-head" style={{ color: "#2d2d2d" }}>
                      Google inks pact for new 35-storey office
                    </h2>
                  </a>
                  <p>
                    That dominion stars lights dominion divide years for fourth
                    have don't stars is that he earth it first without heaven in
                    place seed it second morning saying.
                  </p>
                  <ul className="blog-info-link">
                    <li>
                      <a href="#">
                        <i className="fa fa-user" /> Travel, Lifestyle
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" /> 03 Comments
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
              <article className="blog_item">
                <div className="blog_item_img">
                  <img
                    className="card-img rounded-0"
                    src="assets/img/blog/single_blog_2.png"
                    alt=""
                  />
                  <a href="#" className="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                  </a>
                </div>
                <div className="blog_details">
                  <a className="d-inline-block" href="blog_details.html">
                    <h2 className="blog-head" style={{ color: "#2d2d2d" }}>
                      Google inks pact for new 35-storey office
                    </h2>
                  </a>
                  <p>
                    That dominion stars lights dominion divide years for fourth
                    have don't stars is that he earth it first without heaven in
                    place seed it second morning saying.
                  </p>
                  <ul className="blog-info-link">
                    <li>
                      <a href="#">
                        <i className="fa fa-user" /> Travel, Lifestyle
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" /> 03 Comments
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
              <article className="blog_item">
                <div className="blog_item_img">
                  <img
                    className="card-img rounded-0"
                    src="assets/img/blog/single_blog_3.png"
                    alt=""
                  />
                  <a href="#" className="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                  </a>
                </div>
                <div className="blog_details">
                  <a className="d-inline-block" href="blog_details.html">
                    <h2 className="blog-head" style={{ color: "#2d2d2d" }}>
                      Google inks pact for new 35-storey office
                    </h2>
                  </a>
                  <p>
                    That dominion stars lights dominion divide years for fourth
                    have don't stars is that he earth it first without heaven in
                    place seed it second morning saying.
                  </p>
                  <ul className="blog-info-link">
                    <li>
                      <a href="#">
                        <i className="fa fa-user" /> Travel, Lifestyle
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" /> 03 Comments
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
              <article className="blog_item">
                <div className="blog_item_img">
                  <img
                    className="card-img rounded-0"
                    src="assets/img/blog/single_blog_4.png"
                    alt=""
                  />
                  <a href="#" className="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                  </a>
                </div>
                <div className="blog_details">
                  <a className="d-inline-block" href="blog_details.html">
                    <h2 className="blog-head" style={{ color: "#2d2d2d" }}>
                      Google inks pact for new 35-storey office
                    </h2>
                  </a>
                  <p>
                    That dominion stars lights dominion divide years for fourth
                    have don't stars is that he earth it first without heaven in
                    place seed it second morning saying.
                  </p>
                  <ul className="blog-info-link">
                    <li>
                      <a href="#">
                        <i className="fa fa-user" /> Travel, Lifestyle
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" /> 03 Comments
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
              <article className="blog_item">
                <div className="blog_item_img">
                  <img
                    className="card-img rounded-0"
                    src="assets/img/blog/single_blog_5.png"
                    alt=""
                  />
                  <a href="#" className="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                  </a>
                </div>
                <div className="blog_details">
                  <a className="d-inline-block" href="blog_details.html">
                    <h2 className="blog-head" style={{ color: "#2d2d2d" }}>
                      Google inks pact for new 35-storey office
                    </h2>
                  </a>
                  <p>
                    That dominion stars lights dominion divide years for fourth
                    have don't stars is that he earth it first without heaven in
                    place seed it second morning saying.
                  </p>
                  <ul className="blog-info-link">
                    <li>
                      <a href="#">
                        <i className="fa fa-user" /> Travel, Lifestyle
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" /> 03 Comments
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
              <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Previous">
                      <i className="ti-angle-left" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Next">
                      <i className="ti-angle-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              <aside className="single_sidebar_widget search_widget">
                <form action="#">
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Keyword"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Search Keyword'"
                      />
                      <div className="input-group-append">
                        <button className="btns" type="button">
                          <i className="ti-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </aside>
              <aside className="single_sidebar_widget post_category_widget">
                <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
                  Category
                </h4>
                <ul className="list cat-list">
                  <li>
                    <a href="#" className="d-flex">
                      <p>Resaurant food</p>
                      <p>(37)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Travel news</p>
                      <p>(10)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Modern technology</p>
                      <p>(03)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Product</p>
                      <p>(11)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Inspiration</p>
                      <p>21</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Health Care (21)</p>
                      <p>09</p>
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="single_sidebar_widget popular_post_widget">
                <h3 className="widget_title" style={{ color: "#2d2d2d" }}>
                  Recent Post
                </h3>
                <div className="media post_item">
                  <img src="assets/img/post/post_1.png" alt="post" />
                  <div className="media-body">
                    <a href="blog_details.html">
                      <h3 style={{ color: "#2d2d2d" }}>
                        From life was you fish...
                      </h3>
                    </a>
                    <p>January 12, 2019</p>
                  </div>
                </div>
                <div className="media post_item">
                  <img src="assets/img/post/post_2.png" alt="post" />
                  <div className="media-body">
                    <a href="blog_details.html">
                      <h3 style={{ color: "#2d2d2d" }}>The Amazing Hubble</h3>
                    </a>
                    <p>02 Hours ago</p>
                  </div>
                </div>
                <div className="media post_item">
                  <img src="assets/img/post/post_3.png" alt="post" />
                  <div className="media-body">
                    <a href="blog_details.html">
                      <h3 style={{ color: "#2d2d2d" }}>
                        Astronomy Or Astrology
                      </h3>
                    </a>
                    <p>03 Hours ago</p>
                  </div>
                </div>
                <div className="media post_item">
                  <img src="assets/img/post/post_4.png" alt="post" />
                  <div className="media-body">
                    <a href="blog_details.html">
                      <h3 style={{ color: "#2d2d2d" }}>Asteroids telescope</h3>
                    </a>
                    <p>01 Hours ago</p>
                  </div>
                </div>
              </aside>
              <aside className="single_sidebar_widget tag_cloud_widget">
                <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
                  Tag Clouds
                </h4>
                <ul className="list">
                  <li>
                    <a href="#">project</a>
                  </li>
                  <li>
                    <a href="#">love</a>
                  </li>
                  <li>
                    <a href="#">technology</a>
                  </li>
                  <li>
                    <a href="#">travel</a>
                  </li>
                  <li>
                    <a href="#">restaurant</a>
                  </li>
                  <li>
                    <a href="#">life style</a>
                  </li>
                  <li>
                    <a href="#">design</a>
                  </li>
                  <li>
                    <a href="#">illustration</a>
                  </li>
                </ul>
              </aside>
              <aside className="single_sidebar_widget instagram_feeds">
                <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
                  Instagram Feeds
                </h4>
                <ul className="instagram_row flex-wrap">
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="assets/img/post/post_5.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="assets/img/post/post_6.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="assets/img/post/post_7.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="assets/img/post/post_8.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="assets/img/post/post_9.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="assets/img/post/post_10.png"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="single_sidebar_widget newsletter_widget">
                <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
                  Newsletter
                </h4>
                <form action="#">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter email'"
                      placeholder="Enter email"
                      required=""
                    />
                  </div>
                  <button
                    className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Blog Area End */}
  </main>
  <footer>
    <div
      className="footer-wrapper section-bg2"
      data-background="assets/img/gallery/footer_bg.png"
    >
      {/* Footer Top*/}
      <div className="footer-area footer-padding">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="single-footer-caption mb-30">
                  <div className="footer-tittle">
                    <div className="footer-logo mb-20">
                      <a href="index.html">
                        <img src="assets/img/logo/logo2_footer.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Contact Info</h4>
                  <ul>
                    <li>
                      <p>Address :Your address goes here, your demo address.</p>
                    </li>
                    <li>
                      <a href="#">Phone : +8880 44338899</a>
                    </li>
                    <li>
                      <a href="#">Email : info@colorlib.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Important Link</h4>
                  <ul>
                    <li>
                      <a href="#"> View Project</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Testimonial</a>
                    </li>
                    <li>
                      <a href="#">Proparties</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Newsletter</h4>
                  <div className="footer-pera footer-pera2">
                    <p>
                      Heaven fruitful doesn't over lesser in days. Appear
                      creeping.
                    </p>
                  </div>
                  {/* Form */}
                  <div className="footer-form">
                    <div id="mc_embed_signup">
                     
                       
                       
                            
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer-bottom */}
      <div className="footer-bottom-area">
        <div className="container">
          <div className="footer-border">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-xl-10 col-lg-9 ">
                <div className="footer-copy-right">
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3">
                <div className="footer-social f-right">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.facebook.com/sai4ull">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fas fa-globe" />
                  </a>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

        
        
        </Fragment>
    )
}

export default Elements;