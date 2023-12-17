import React, { Fragment } from "react";
import { Link } from 'react-router-dom'; // Example import for React Router



function About() {
    
    return (
        
        <Fragment>
            
            <>
  {/* ? Preloader Start */}
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
                    <li>Phone: +60 0109089373</li>
                    <li>Email: kioskprihatin@gmail.com</li>
                  </ul>
                  <div className="header-social">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.facebook.com/sai4ull">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link tof="#">
                          <i className="fab fa-google-plus-g" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-info-right d-flex align-items-center">
                  <div className="select-this">
                    <form action="#">
                      <div className="select-itms">
                       
                      </div>
                    </form>
                  </div>
                  <ul className="contact-now">
                    <li>
                      <Link to="#">Subscribe Now</Link>
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
                          <Link to="/stocks">stocks</Link>
                        </li>
                        <li>
                          <Link to="/contact">contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* Header-btn */}
                  <div className="header-right-btn d-none d-lg-block ml-20">
                   <a href="donate" className="btn header-btn">
                      Donate
                    </a>
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
  {/* header end */}
  <main>
    {/*? Hero Start */}
    <div className="slider-area2">
      <div className="slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap hero-cap2 pt-20 text-center">
                <h2>About US</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Hero End */}
    {/*? Services Area Start */}
    <div className="service-area section-padding30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
            {/* Section Tittle */}
            <div className="section-tittle text-center mb-80">
              <span>What we are doing</span>
              <h2>Kiosk Prihatin</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat text-center mb-50">
              <div className="cat-icon">
                <span className="flaticon-null-1" />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">Community Empowerment</a>
                </h5>
                <p>
                        The mission of this kiosk is to empower the local
                        community by providing access to essential resources,
                        education, and support. It aims to uplift the community by
                        offering skill development workshops, educational materials,
                        and connecting individuals with relevant local opportunities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat active text-center mb-50">
              <div className="cat-icon">
                <span className="flaticon-think" />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">Health and Well-being</a>
                </h5>
                <p>
                        This kiosk is dedicated to promoting health and well-being among its visitors.
                        Its mission is to offer free or affordable health screenings,
                        distribute information about healthy living practices,
                        and provide access to resources like nutritious food options
                        and mental health support.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat text-center mb-50">
              <div className="cat-icon">
                <span className="flaticon-gear" />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">Digital Literacy and Access</a>
                </h5>
                <p>
                        This kiosk focuses on bridging the digital divide within the community.
                        Its mission is to provide access to technology,
                  offer training on digital literacy skills, and assist in navigating online resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Services Area End */}
    {/*? About Law Start*/}
    <section className="about-low-area section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10">
            <div className="about-caption mb-50">
              {/* Section Tittle */}
              <div className="section-tittle mb-35">
                <span>About our society</span>
                <h2>We Are In A Mission To Help Helpless</h2>
              </div>
              <p>
                      Welcome to Kiosk Prihatin! We're here for you and our community. Our goal is to help by providing resources and support. From health to education, we're focused on making
                      a positive difference in your life. Join us in building a stronger community, together.
              </p>
             
            </div>
            <a href="about" className="btn">
              About US
            </a>
          </div>
          <div className="col-lg-6 col-md-12">
            {/* about-img */}
            <div className="about-img ">
              <div className="about-font-img d-none d-lg-block">
                <img src="" alt="" />
              </div>
              <div className="about-back-img ">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* About Law End*/}
    {/* Want To work */}
 
    {/* Want To work End */}
    {/*? Testimonial Start */}
    <div className="testimonial-area testimonial-padding">
      <div className="container">
        {/* Testimonial contents */}
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-10">
            <div className="h1-testimonial-active dot-style">
              {/* Single Testimonial */}
              <div className="single-testimonial text-center">
                <div className="testimonial-caption ">
                  {/* founder */}
                  <div className="testimonial-founder">
                    <div className="founder-img mb-40">
                      <img src="assets/img/gallery/bg1.png" alt="" />
                      <span>Margaret Lawson</span>
                      <p>Creative Director</p>
                    </div>
                  </div>
                  <div className="testimonial-top-cap">
                    <p>
                      “I am at an age where I just want to be fit and healthy
                      our bodies are our responsibility! So start caring for
                      your body and it will care for you. Eat clean it will care
                      for you and workout hard.”
                    </p>
                  </div>
                </div>
              </div>
              {/* Single Testimonial */}
              <div className="single-testimonial text-center">
                <div className="testimonial-caption ">
                  {/* founder */}
                  <div className="testimonial-founder">
                    <div className="founder-img mb-40">
                      <img src="assets/img/gallery/bg2.png" alt="" />
                      <span>Margaret Lawson</span>
                      <p>Creative Director</p>
                    </div>
                  </div>
                  <div className="testimonial-top-cap">
                    <p>
                      “I am at an age where I just want to be fit and healthy
                      our bodies are our responsibility! So start caring for
                      your body and it will care for you. Eat clean it will care
                      for you and workout hard.”
                    </p>
                  </div>
                </div>
              </div>
              {/* Single Testimonial */}
              <div className="single-testimonial text-center">
                <div className="testimonial-caption ">
                  {/* founder */}
                  <div className="testimonial-founder">
                    <div className="founder-img mb-40">
                      <img src="assets/img/gallery/bg3.png" alt="" />
                      <span>Margaret Lawson</span>
                      <p>Creative Director</p>
                    </div>
                  </div>
                  <div className="testimonial-top-cap">
                    <p>
                      “I am at an age where I just want to be fit and healthy
                      our bodies are our responsibility! So start caring for
                      your body and it will care for you. Eat clean it will care
                      for you and workout hard.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Testimonial End */}
    {/*? Count Down Start */}
    <div
      className="count-down-area pt-25 section-bg"
      data-background="assets/img/gallery/section_bg02.png"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <div className="count-down-wrapper">
              <div className="row justify-content-between">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  {/* Counter Up */}
                  <div className="single-counter text-center">
                    <span className="counter color-green">6,200</span>
                    <span className="plus">+</span>
                    <p className="color-green">Donation</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  {/* Counter Up */}
                  <div className="single-counter text-center">
                    <span className="counter color-green">80</span>
                    <span className="plus">+</span>
                    <p className="color-green">Fund Raised</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  {/* Counter Up */}
                  <div className="single-counter text-center">
                    <span className="counter color-green">256</span>
                    <span className="plus">+</span>
                    <p className="color-green">Donation</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  {/* Counter Up */}
                  <div className="single-counter text-center">
                    <span className="counter color-green">256</span>
                    <span className="plus">+</span>
                    <p className="color-green">Donation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Count Down End */}
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
                      <p>Address :UiTM KEDAH.</p>
                    </li>
                    <li>
                      <Link to="#">Phone : 60 109089373</Link>
                    </li>
                    <li>
                      <Link to="#">Email : kioskprihatin@gmail.com</Link>
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
                      <Link to="#"> View Project</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">Testimonial</Link>
                    </li>
                    <li>
                      <Link to="#">Proparties</Link>
                    </li>
                    <li>
                      <Link to="#">Support</Link>
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
                    <Link to="https://colorlib.com" target="_blank">
                      Colorlib
                    </Link>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3">
                <div className="footer-social f-right">
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="https://www.facebook.com/sai4ull">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="#">
                    <i className="fas fa-globe" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-behance" />
                  </Link>
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

export default About;