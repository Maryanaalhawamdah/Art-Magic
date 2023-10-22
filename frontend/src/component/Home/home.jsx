import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './hom.css';
// import Slider from '../Slider/slider';
import axios from 'axios';


const HomePage = () => {

    const [products, setProducts] = useState([]);
    const [salesProducts, setSalesProducts] = useState([]);

    useEffect(() => {
        // Fetch the first 4 products from your backend API
        axios.get('http://localhost/React_project/back-end/homepage/products.php') // Adjust the API endpoint as per your backend setup
            .then((response) => {
                // Assuming your API returns an array of products
                setProducts(response.data.slice(0, 4)); // Slice the first 4 products
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });


        axios.get('http://localhost/React_project/back-end/homepage/Offers.php')
            .then((response) => {
                setSalesProducts(response.data.slice(0, 4));
            })
            .catch((error) => {
                console.error('Error fetching offer products:', error);
            });


    }, []);

    console.log(products);


    return (
        <div>
            <Header />

            {/* New section 1: "slider" */}
           
             <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="/images/slider.jpg" class="d-block w-100" alt="slider" style={{width:'90%',height:'500px'}}/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/images/slider1.jpg" class="d-block w-100" alt="slider1" style={{width:'90%',height:'500px'}}/>
    </div>
    <div class="carousel-item">
      <img src="/images/slider2.jpg" class="d-block w-100" alt="slider2" style={{width:'90%',height:'500px'}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
             </div>
            {/* New section 2: "FEATURED PRODUCTS" */}
            <div className="container d-flex flex-wrap" style={{marginTop:'5%',marginBottom:'5%',}}>
            <div class="card" style={{width: '18rem',marginRight:'2%',marginLeft:'5%',backgroundColor:'#eabf88'}}>
               <img src="/images/credibility.jpg" class="card-img-top" alt="..." style={{width:'45%',margin:'auto'}}/>
              <div class="card-body">
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card" style={{width: '18rem',marginRight:'2%',backgroundColor:'#d69e9e'}}>
               <img src="/images/connection.png" class="card-img-top" alt="..." style={{width:'50%',margin:'auto'}}/>
              <div class="card-body">
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card" style={{width: '18rem',marginRight:'2%',backgroundColor:'#eabf88'}}>
               <img src="/images/uniqe.png" class="card-img-top" alt="..." style={{width:'50%',margin:'auto'}}/>
              <div class="card-body">
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card" style={{width: '18rem',marginRight:'2%',backgroundColor:'#d69e9e'}}>
               <img src="/images/diversity.png" class="card-img-top" alt="..." style={{width:'40%',margin:'auto'}}/>
              <div class="card-body">
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            </div>


            {/* New section 3: "offer-banner" */}

            


            {/* New section 4: "Categories" */}

            <section className="featured pt-100">
                <div className="container">
                    <div className="row mb-25">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="hading">
                                <h2 className="hading-title" style={{color:'white'}}>Categories</h2>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div role="tabpanel" className="row tab-pane fade active show">
                            {/* Category 1 */}
                            <div className="featured-product mb-25">
                                <div className="product-img transition mb-15">
                                    <a href="Categories/1">
                                        <img style={{ height: '350px', width: '350px' }} src="images/paints.png" alt="product" className="transition" />
                                    </a>
                                    <div className="new-label">
                                        <span className="text-uppercase">New</span>
                                    </div>
                                    <div className="product-details-btn text-uppercase text-center transition">
                                        <a href="Categories/1" className="quick-popup mfp-iframe">Explore Category</a>
                                    </div>
                                </div>
                                <div className="product-desc">
                                    <h2 style={{ textAlign: 'center',color:'white' }}>Paints</h2>

                                </div>
                            </div>

                            {/* Category 2 */}
                            <div className="featured-product mb-25">
                                <div className="product-img transition mb-15">
                                    <a href="Categories/2">
                                        <img style={{ height: '350px', width: '350px' }} src="images/canvas.png" alt="product" className="transition" />
                                    </a>
                                    <div className="product-details-btn text-uppercase text-center transition">
                                        <a href="Categories/2" className="quick-popup">Explore Category</a>
                                    </div>
                                </div>
                                <div className="product-desc">
                                    <h2 style={{ textAlign: 'center',color:'white' }}>Canvas & Surfaces</h2>
                                </div>
                            </div>

                            {/* Category 3 */}
                            <div className="featured-product mb-25">
                                <div className="product-img transition mb-15">
                                    <a href="Categories/3">
                                        <img style={{ height: '350px', width: '350px' }} src="images/drawing.png" alt="product" className="transition" />
                                    </a>
                                    <div className="sale-label">
                                        <span className="text-uppercase">Sale</span>
                                    </div>
                                    <div className="product-details-btn text-uppercase text-center transition">
                                        <a href="Categories/3" className="quick-popup">Explore Category</a>
                                    </div>
                                </div>
                                <div className="product-desc">
                                    <h2 style={{ textAlign: 'center' ,color:'white'}}>Drawing</h2>
                                </div>
                            </div>

                            {/* Category 4 */}
                            <div className="featured-product mb-25">
                                <div className="product-img transition mb-15">
                                    <a href="Categories/4">
                                        <img style={{ height: '350px', width: '350px' }} src="images/accessories.png" alt="product" className="transition" />
                                    </a>
                                    <div className="product-details-btn text-uppercase text-center transition">
                                        <a href="Categories/4" className="quick-popup">Explore Category</a>
                                    </div>
                                </div>
                                <div className="product-desc">
                                    <h2 style={{ textAlign: 'center',color:'white' }}>Accessories</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

   

            <Footer />

        </div>
    );
};

export default HomePage;