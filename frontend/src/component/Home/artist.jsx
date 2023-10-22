import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from "axios";
import './artist.css';
import {  Link } from 'react-router-dom';


const Artist = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost/Art-Magic/connection/artists/get.php")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <Header/>
      {items.map((item, index) => (
        <div key={index} className="card text-center">
          <div className="card-header">
            <img src={item.image} alt="artist" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.fname} {item.lname}</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
           <Link to=''><button className='show-btn'>show paints</button></Link>
           <Link to=''><button className='contact-btn'>Contact </button></Link>
           
          </div>
        </div>
      ))}
      <Footer/>
    </div>
  );
};

export default Artist;
