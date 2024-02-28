import React from 'react';
import { Link } from 'react-router-dom';

function Homepage_user() {
 
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
      <div className="container"><Link className="navbar-brand logo"  to="/User/Home">Candidate</Link><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link active" to="/User/Home">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/User/Vacancy">VACANCY</Link></li>
                </ul>
            </div>
        </div>
      </nav>
      <main className="page landing-page">
      <section className="clean-block clean-hero" alt="image4" style={{
    backgroundImage: 'url("../assets/img/tech/image4.jpg")',
    color: 'rgba(9, 162, 255, 0.85)',
  }}>
            <div className="text">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p><Link className="btn btn-outline-light btn-lg" type="button" to="/">Learn More</Link>
            </div>
        </section>
        <section className="clean-block clean-info dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Info</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6"><img className="img-thumbnail" alt="image5" src="../assets/img/scenery/image5.jpg"/></div>
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
                        <div className="carousel-item active"><img className="w-100 d-block" alt="image1" src="../assets/img/scenery/image1.jpg" /></div>
                        <div className="carousel-item"><img className="w-100 d-block" alt="image4" src="../assets/img/scenery/image4.jpg" /></div>
                        <div className="carousel-item"><img className="w-100 d-block" alt="image6" src="../assets/img/scenery/image6.jpg" /></div>
                    </div>
                    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></li>
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
                        <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" alt="Avatar1" src="../assets/img/avatars/avatar1.jpg"/>
                            <div className="card-body info">
                                <h4 className="card-title">John Smith</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons"><i className="icon-social-facebook"></i><i className="icon-social-instagram"></i><i className="icon-social-twitter"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" alt="Avatar2" src="../assets/img/avatars/avatar2.jpg"/>
                            <div className="card-body info">
                                <h4 className="card-title">Robert Downturn</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons"><i className="icon-social-facebook"></i><i className="icon-social-instagram"></i><i className="icon-social-twitter"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" alt="Avatar3" src="../assets/img/avatars/avatar3.jpg"/>
                            <div className="card-body info">
                                <h4 className="card-title">Ally Sanders</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons"><i className="icon-social-facebook"></i><i className="icon-social-instagram"></i><i className="icon-social-twitter"></i></div>
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
                        <li><Link to="/Homepage">Home</Link></li>
                        <li><Link to="/Authrization/Login">Sign up</Link></li>
                        <li>Downloads</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>About us</h5>
                    <ul>
                        <li>Company Information</li>
                        <li>Contact us</li>
                        <li><Link to="/User/Vacancy">Reviews</Link></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>Support</h5>
                    <ul>
                        <li>FAQ</li>
                        <li>Help desk</li>
                        <li>Forums</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>Legal</h5>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
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