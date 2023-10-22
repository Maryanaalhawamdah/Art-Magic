import React from 'react';
import './hom.css';
import './animate.css';
// import './bootstrap.min.css';
import './font-awesome.min.css';
// import './glass-case.css';
import './magnific-popup.css';
// import './owl.carousel.css';
import './responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faPinterestP } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

    return (
        <footer className="footer pt-100">


         
        <div className="container" >
          <div className="footer-inner">
            <div className="footer-box">
              <div className="footer-logo">
                <a href="/"><img src="/images/logo.png" alt="logo" style={{width:'40%'}}/></a>
              </div>
              <p className="footer-desc">At Magic Art , we offer a wide range of top-quality Art product at competitive prices. Shop with us for a convenient and satisfying shopping experience</p>
            </div>
  
           
  
                    <div className="footer-box footer-static m-0">
              <span className="opener plus"></span>
              <h2 className="footer-title text-uppercase">Your Account</h2>
              <ul className="footer-block-contant">
                <li>Artists</li>
                <li>Products</li>
                <li>Courses</li>
                <li>Paints</li>
                <li>Canvas & Surfaces</li>
              </ul>
            </div>
  
            <div className="footer-box footer-contact footer-static m-0">
              <span className="opener plus"></span>
              <h2 className="footer-title text-uppercase">Contact us</h2>
              <ul className="footer-block-contant">
                <li><img src="/images/cont-1.png" alt="img"style={{color:'white'}} /><span>21 Ashrah Area, Alfarooq Street <br />Aqaba, Aqaba</span></li>
                <li><img src="/images/cont-2.png" alt="img" />0795053882</li>
                <li><img src="/images/cont-3.png" alt="img" />maryana.alhawamdah8@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="copy-right mt-100">
            <div className="row">
              <div className="col-md-10">
                <p className="copyright-text"> copyright &#169; 2023 Art Magic by developer Maryana Alhawamdah</p>
              </div>
              {/* <div className="col-md-4">
                <ul>
                  <li><FontAwesomeIcon icon={faFacebook} className="fa-2x" style={{ color: '#000' , marginLeft: '30px' }} /></li>
                  <li><FontAwesomeIcon icon={faTwitter} className="fa-2x" style={{ color: '#020203' , marginLeft: '30px' }} /></li>
                  <li><FontAwesomeIcon icon={faLinkedin} className="fa-2x" style={{ color: '#020203' , marginLeft: '30px' }} /></li>
                  <li><FontAwesomeIcon icon={faPinterestP} className="fa-2x" style={{ color: '#020203' , marginLeft: '30px' }} /></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    
        );
};
export default Footer;