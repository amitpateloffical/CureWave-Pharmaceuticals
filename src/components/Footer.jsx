import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight,  } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const navigate = useNavigate();
  const handleClick = (to) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(to);
  };
  
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-dark text-white-50 footer py-3">
        <div className="footer-section pt-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn " data-wow-delay="0.1s">
              <a href="index.html" className="d-inline-block mb-3">
                <h1 className="text-white">
                Mediva <span className="text-primary"></span>Pharmaceuticals
                </h1>
              </a>
              <p className="mb-0 style={{ fontSize: '14px' }}>">
              "Mediva Pharmaceuticals offers cutting-edge treatments, backed by rigorous research and quality assurance, ensuring optimal patient care and outcomes."
              </p>
              <div className="d-flex pt-4">
                <a className="btn btn-outline-light btn-social" href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
           
            <div className="col-md-7 col-lg-2 wow fadeIn align-right" data-wow-delay="0.5s">
              <h5 className="text-white mb-4">Popular Link</h5>
              
              <Link onClick={() => handleClick('/about')} className="btn btn-link" to="/about">
                <FontAwesomeIcon icon={faAngleRight} />
                About Us
              </Link>
            
              
              <Link onClick={() => handleClick('/contact')} className="btn btn-link" to="/contact" >
                <FontAwesomeIcon icon={faAngleRight} />
                Contact Us
              </Link>
              <Link onClick={() => handleClick('/manufacturing')}  className="btn btn-link" to="/manufacturing">
                <FontAwesomeIcon icon={faAngleRight} />
                Manufacturing
              </Link>
              <Link onClick={() => handleClick('/features')} className="btn btn-link" to="/features">
                <FontAwesomeIcon icon={faAngleRight} />
             R&d
              </Link>
            </div>
           
           

          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                &copy; Mediva Pharmaceuticals, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
