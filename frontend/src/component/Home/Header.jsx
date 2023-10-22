import React from 'react';
import './hom.css';
import './font-awesome.min.css';
import './magnific-popup.css';
import './responsive.css';
import { Link, useNavigate } from "react-router-dom";

import { FiLogOut } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const handleLogout = () => {
    localStorage.setItem('login', 'false');
    window.location.href = './';
  };
  

  const isLoggedIn = localStorage.getItem('login') === 'true';

  return (
    <div>
      <header className="header transition">
        <div className="container position-r" style={{backgroundColor:'#ebd1af',marginLeft:'2%'}}>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 align-flax">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  <img alt="log" src="/images/logo.png" className="transition" style={{width:'30%'}}/>
                </a>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-6 position-i">
              <div className="transition">
                <div className="menu">
                  <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/Products">PRODUCTS</Link>
                    </li>
                    <li>
                      <Link to="/artist">Artist</Link>
                    </li>
                    <li>
                      <Link to="/About/about">ABOUT US</Link>
                    </li>
                    <li>
                      <Link to="/contact/contact">CONTACT US</Link>
                    </li>
                    {!isLoggedIn && (
                      <>
                        <li>
                          <a href="login">LOGIN</a>
                        </li>
                        <li>
                          <a href="register">REGISTER</a>
                        </li>
                      </>
                    )}
                    <li>
                      <a href="contact.html">
                        [ ]{' '}
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          // className="fa-x"
                          style={{ color: '#020203' ,fontSize: '25px' }}
                        />
                      </a>
                    </li>
                    {isLoggedIn && (
                      <>
                        <li key="loggedin">
                          <a href="UserProfile">
                            <FontAwesomeIcon
                              icon={faUser}
                              style={{ color: '#020203' ,fontSize: '25px' }}
                            />
                          </a>
                        </li>
                        <li>
                          <FiLogOut
                            style={{ fontSize: '30px' ,cursor:'pointer' }}
                            onClick={handleLogout}
                          />
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;