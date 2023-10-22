import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from "axios";


const Paints = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
      axios.get("")
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, []);
    return (
        <div>
            </div>
    )

}

export default Paints;