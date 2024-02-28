

import { Link } from 'react-router-dom';



export default function NavbarHeadUser() {  return (

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
)}