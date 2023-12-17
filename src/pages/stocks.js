import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Stocks() {

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
                    <li>Phone: +60 0109089373</li>
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
                      <Link href="/login">Login</Link>
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

  
                <h3 className="heading">Stocks</h3>
                
                < div className="box-container">
                <div className="box">
                    
                    <img src="assets/img/gallery/f1.png" ></img>
                    <h3>Maggi Kari</h3>
                    <p>Stocks: 9</p>
                </div>

                  <div className="box">
                    
                    <img src="assets/img/gallery/f2.png"></img>
                    <h3>Biskut Tiger</h3>
                    <p>Stocks: 2</p>
                </div>

                 <div className="box">
                    
                    <img src="assets/img/gallery/f3.png"></img>
                    <h3>Gula Putih</h3>
                    <p>Stocks: 10</p>
                </div>

                 <div className="box">
                    
                    <img src="assets/img/gallery/f4.png"></img>
                    <h3>Roti Gardenia</h3>
                    <p>Stocks: 2</p>
          </div>
          
           <div className="box">
                    
                    <img src="assets/img/gallery/t1.png"></img>
                    <h3>Teh Lipton</h3>
                    <p>Stocks: 9</p>
          </div>
          
           <div className="box">
                    
                    <img src="assets/img/gallery/t2.png"></img>
                    <h3>Bihun Pama</h3>
                    <p>Stocks: 10</p>
          </div>
          
           <div className="box">
                    
                    <img src="assets/img/gallery/t3.png"></img>
                    <h3>Milo</h3>
                    <p>Stocks: 7</p>
          </div>
          
           <div className="box">
                    
                    <img src="assets/img/gallery/t4.png"></img>
                    <h3>Koko Krunch</h3>
                    <p>Stocks: 5</p>
          </div>
          
          <div className="box">
                    
                    <img src="assets/img/gallery/w1.png"></img>
                    <h3>Beras</h3>
                    <p>Stocks: 4</p>
          </div>
          
          <div className="box">
                    
                    <img src="assets/img/gallery/w2.png"></img>
                    <h3>Nestum Coklat</h3>
                    <p>Stocks: 9</p>
          </div>
          
          <div className="box">
                    
                    <img src="assets/img/gallery/w3.png"></img>
                    <h3>Minyak Masak</h3>
                    <p>Stocks: 10</p>
          </div>
          
          <div className="box">
                    
                    <img src="assets/img/gallery/w4.png"></img>
                    <h3>Cornflake</h3>
                    <p>Stocks: 5</p>
          </div>
          




                </div>


               
                



            
  
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
</Fragment>




      
    )
}

export default Stocks;