import React from 'react';
import { Link } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage_user() {
 
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
      <div className="container"><Link className="navbar-brand logo"  to="/User/Home">Candidate</Link><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link active" to="/User/Home">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/User/Vacancy">VACANCY</Link></li>
                </ul>
            </div>
        </div>
      </nav>
      <main className="page landing-page">
      <section className="clean-block clean-hero" style={{
    backgroundImage: 'url("../assets/img/tech/image4.jpg")',
    color: 'rgba(9, 162, 255, 0.85)',
  }}>
            <div className="text">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p><Link class="btn btn-outline-light btn-lg" type="button" to="/Homepage">Learn More</Link>
            </div>
        </section>
        <section className="clean-block clean-info dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Info</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6"><img className="img-thumbnail" src="../assets/img/scenery/image5.jpg"/></div>
                    <div className="col-md-6">
                        <h3>Lorem impsum dolor sit amet</h3>
                        <div className="getting-started-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div><Link className="btn btn-outline-primary btn-lg" type="button" to="/Authrization/Login">Join Now</Link>
                       
                    </div>
                </div>
            </div>
        </section>
        <section className="clean-block features">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Features</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5 feature-box"><i className="icon-star icon"></i>
                        <h4>Bootstrap 5</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-pencil icon"></i>
                        <h4>Customizable</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-screen-smartphone icon"></i>
                        <h4>Responsive</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-refresh icon"></i>
                        <h4>All Browser Compatibility</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <Link className="btn btn-outline-primary btn-lg" type="button" to="/Authrization/Registretion">Register Now</Link>
                </div>
            </div>
        </section>
        <section className="clean-block slider dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Slider</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
                    <div className="carousel-inner">
                        <div className="carousel-item active"><img className="w-100 d-block" src="../assets/img/scenery/image1.jpg" alt="Slide Image"/></div>
                        <div className="carousel-item"><img className="w-100 d-block" src="../assets/img/scenery/image4.jpg" alt="Slide Image"/></div>
                        <div className="carousel-item"><img className="w-100 d-block" src="../assets/img/scenery/image6.jpg" alt="Slide Image"/></div>
                    </div>
                    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a></div>
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carousel-1" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
                    </ol>
                </div>
            </div>
        </section>
        <section className="clean-block about-us">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="../assets/img/avatars/avatar1.jpg"/>
                            <div className="card-body info">
                                <h4 className="card-title">John Smith</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons"><a href="#"><i className="icon-social-facebook"></i></a><a href="#"><i className="icon-social-instagram"></i></a><a href="#"><i className="icon-social-twitter"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="../assets/img/avatars/avatar2.jpg"/>
                            <div className="card-body info">
                                <h4 className="card-title">Robert Downturn</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons"><a href="#"><i className="icon-social-facebook"></i></a><a href="#"><i className="icon-social-instagram"></i></a><a href="#"><i className="icon-social-twitter"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card"><img class="card-img-top w-100 d-block" src="../assets/img/avatars/avatar3.jpg"/>
                            <div className="card-body info">
                                <h4 className="card-title">Ally Sanders</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons"><a href="#"><i className="icon-social-facebook"></i></a><a href="#"><i className="icon-social-instagram"></i></a><a href="#"><i className="icon-social-twitter"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <footer className="page-footer dark">
      <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2023 Copyright Text</p>
        </div>
      </footer>
    </div>
    
  );
}

export default Homepage_user;