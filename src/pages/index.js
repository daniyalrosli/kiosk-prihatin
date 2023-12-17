import React, { Fragment } from "react";
import { Link } from "react-router-dom";



function Index() {

    return (

        <Fragment>

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
                    <li>Phone: +60 1090897363</li>
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
                    <form action="#">
                      <div className="select-itms">
                        
                      </div>
                    </form>
                  </div>
                  <ul className="contact-now">
                    <li>
                      <a  href="login">Login Now</a>
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
                  <a  href="/">
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
                          <Link to="about">About</Link>
                        </li>
                        <li>
                          <Link to="volunteer">volunteer</Link>
                        </li>
                        <li>
                          <Link to="events">social events </Link>
                        </li>
                        <li>
                          <Link to="stocks">stocks</Link>
                        </li>
                        <li>
                          <Link to="contact">contact</Link>
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
              <strong><h3>We Are In A Mission To Help Helpless</h3></strong>
              </div>
              <p>
                      Welcome to Kiosk Prihatin! We're here for you and our community. Our goal is to help by providing resources and support. From health to education, we're focused on making
                      a positive difference in your life. Join us in building a stronger community, together.
              </p>
             
            </div>
            <Link to="about" className="btn">
              About US
            </Link>
          </div>
          <div className="col-lg-6 col-md-12">
            {/* about-img */}
            <div className="about-img ">
              <div className="about-font-img d-none d-lg-block">
                
                
              </div>
              <div className="about-back-img ">
                <img src="assets/img/logo/k2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* About Law End*/}
    {/* Our Cases Start */}
    <div className="our-cases-area section-padding30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
            {/* Section Tittle */}
            <div className="section-tittle text-center mb-80">
              <span>Our Cases you can see</span>
              <h2>Explore our latest causes that we works </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cases mb-40">
              <div className="cases-img">
                <img src="assets/img/gallery/g1.png" alt="" />
              </div>
              <div className="cases-caption">
                <h3>
                  <a href="#">Ensure Education For Every Poor Children</a>
                </h3>
                {/* Progress Bar */}
                <div className="single-skill mb-15">
                  <div className="bar-progress">
                    <div id="bar1" className="barfiller">
                      <div className="tipWrap">
                        <span className="tip" />
                      </div>
                      <span className="fill" data-percentage={70} />
                    </div>
                  </div>
                </div>
                {/* / progress */}
                <div className="prices d-flex justify-content-between">
                  <p>
                    Raised:<span> RM20,000</span>
                  </p>
                  <p>
                    Goal:<span> RM35,000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cases mb-40">
              <div className="cases-img">
                <img src="assets/img/gallery/g2.png" alt="" />
              </div>
              <div className="cases-caption">
                <h3>
                  <a href="#">Providing Healthy Food For The Children</a>
                </h3>
                {/* Progress Bar */}
                <div className="single-skill mb-15">
                  <div className="bar-progress">
                    <div id="bar2" className="barfiller">
                      <div className="tipWrap">
                        <span className="tip" />
                      </div>
                      <span className="fill" data-percentage={25} />
                    </div>
                  </div>
                </div>
                {/* / progress */}
                <div className="prices d-flex justify-content-between">
                  <p>
                    Raised:<span> RM20,000</span>
                  </p>
                  <p>
                    Goal:<span> RM35,000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cases mb-40">
              <div className="cases-img">
                <img src="assets/img/gallery/g3.png" alt="" />
              </div>
              <div className="cases-caption">
                <h3>
                  <a href="#">Supply Drinking Water For The People</a>
                </h3>
                {/* Progress Bar */}
                <div className="single-skill mb-15">
                  <div className="bar-progress">
                    <div id="bar3" className="barfiller">
                      <div className="tipWrap">
                        <span className="tip" />
                      </div>
                      <span className="fill" data-percentage={50} />
                    </div>
                  </div>
                </div>
                {/* / progress */}
                <div className="prices d-flex justify-content-between">
                  <p>
                    Raised:<span> RM20,000</span>
                  </p>
                  <p>
                    Goal:<span> RM35,000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Our Cases End */}
    {/* Featured_job_start */}
    <section
      className="featured-job-area section-padding30 section-bg2"
      data-background="assets/img/gallery/section_bg03.png"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
            {/* Section Tittle */}
            <div className="section-tittle text-center mb-80">
              <span>What we are boing</span>
              <h2>We arrange many social events for charity donations</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-12">
            {/* single-job-content */}
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="#">
                    <img src="assets/img/gallery/g6.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="#">
                    <h4>Projek Aidilfitri</h4>
                  </a>
                  <ul>
                    <li>
                      <i className="far fa-clock" />
                      8:30 - 9:30am
                    </li>
                    <li>
                      <i className="fas fa-sort-amount-down" />
                      18.01.2021
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Merbok, Kedah
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            {/* single-job-content */}
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="#">
                    <img src="assets/img/gallery/g7.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="#">
                    <h4>A hand for Children</h4>
                  </a>
                  <ul>
                    <li>
                      <i className="far fa-clock" />
                      8:30 - 9:30am
                    </li>
                    <li>
                      <i className="fas fa-sort-amount-down" />
                      18.01.2021
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Baling,Kedah
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            {/* single-job-content */}
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="#">
                    <img src="assets/img/gallery/g8.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="#">
                    <h4>Mahasiswa Prihatin</h4>
                  </a>
                  <ul>
                    <li>
                      <i className="far fa-clock" />
                      8:30 - 9:30am
                    </li>
                    <li>
                      <i className="fas fa-sort-amount-down" />
                      18.01.2021
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Kuala Langat, Selangor
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Featured_job_end */}
    {/*? Team Ara Start */}
    <div className="team-area pt-160 pb-160">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
            {/* Section Tittle */}
            <div className="section-tittle section-tittle2 text-center mb-70">
              <span>What we are doing</span>
              <h2>Our Expert Volunteer Always ready</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-team mb-30">
              <div className="team-img">
                <img src="assets/img/gallery/a5.png" alt="" />
                {/* Blog Social */}
                <ul className="team-social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-globe" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-caption">
                <h3>
                 
                </h3>
              
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-team mb-30">
              <div className="team-img">
                <img src="assets/img/gallery/a3.png" alt="" />
                {/* Blog Social */}
                <ul className="team-social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-globe" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-caption">
                <h3>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-team mb-30">
              <div className="team-img">
                <img src="assets/img/gallery/a2.png" alt="" />
                {/* Blog Social */}
                <ul className="team-social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-globe" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-caption">
                <h3>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-team mb-30">
              <div className="team-img">
                <img src="assets/img/gallery/a1.png" alt="" />
                {/* Blog Social */}
                <ul className="team-social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-globe" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-caption">
                <h3>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team Ara End */}
    {/* Want To work */}
    <section className="wantToWork-area ">
      <div className="container">
        <div
          className="wants-wrapper w-padding2  section-bg"
          data-background="assets/img/gallery/section_bg01.png"
        >
          <div className="row align-items-center justify-content-between ">
            <div className="col-xl-5 col-lg-9 col-md-8">
              <div className="wantToWork-caption wantToWork-caption2">
<h2><strong>Let's Change The World With Humanity</strong></h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4">
             <center> <Link to="volunteer" className="btn white-btn f-right sm-left">
                Become A Volunteer
              </Link></center> 
            </div>
          </div>
        </div>
      </div>
    </section>
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
                      <span>Hariz Zamzuri</span>
                      <p>Kiosk Prihatin Director</p>
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
                      <span>Luqman Hakim</span>
                      <p>Kiosk Prihatin Deputy Director</p>
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
                      <span>Muhammad Al Hanis</span>
                      <p>Kiosk Prihatin Creative Director</p>
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
    {/*? Blog Area Start */}
    <section className="home-blog-area section-padding30">
      <div className="container">
        {/* Section Tittle */}
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-9 col-sm-10">
            <div className="section-tittle text-center mb-90">
              <span>Our recent blog</span>
              <h2>Latest News from our recent blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                  <img src="assets/img/gallery/r2.jpeg" alt="" />
                  {/* Blog date */}
                  <div className="blog-date text-center">
                    <span>24</span>
                    <p>Now</p>
                  </div>
                </div>
                <div className="blog-cap">
                  <p>Creative derector</p>
                  <h3>
                    <a href="blog_details.html">
                      Donate with UiTM
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                  <img src="assets/img/gallery/r3.jpeg" alt="" />
                  {/* Blog date */}
                  <div className="blog-date text-center">
                    <span>24</span>
                    <p>Now</p>
                  </div>
                </div>
                <div className="blog-cap">
                  <p>Creative derector</p>
                  <h3>
                    <a href="blog_details.html">
                      Donations For UiTM Libraries
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Blog Area End */}
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
                      <a href="#">Phone : 60 109089373</a>
                    </li>
                    <li>
                      <a href="#">Email : kioskprihatin@gmail.com</a>
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
                    Copyright © All rights reserved | Kiosk Prihatin
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



        </Fragment>
    )
}

export default Index;