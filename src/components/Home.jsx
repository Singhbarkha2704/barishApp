import React from 'react'
import Products from './Products';

const Home = () => {
  return (
      <div className='custom-carousel'>
          {/* <div className="card bg-dark text-success border-0">
            <img
                src="https://img.freepik.com/free-photo/pretty-young-woman-pointing-finger-left-smiling-as-inviting-look-copyspace_176420-20841.jpg?w=900&t=st=1665258217~exp=1665258817~hmac=d403779b0070f5714b171e07adb0c6f8d959e89c26ea9e2116a11b2d08aded3b"
                className="card-img"
                alt="girl-pointing-img"
                height='550px'
            />
            <div className="card-img-overlay d-flex justify-content-center flex-column"> 
                <div className="container">
                    <h5 className="card-title display-3 fw-bolder">NEW ARRIVALS</h5>
                    <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS!</p>      
                </div>
    
            </div>
        </div> */}

      {/* --------------carousel--------------- */}
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="https://img.freepik.com/free-psd/sale-banner-template_24972-824.jpg?w=1060&t=st=1666734312~exp=1666734912~hmac=99c31d766b57e8a6faff690375e5631912a3ecb7ce40cb7d9e2405c40dc16507" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://sbam.in/wp-content/uploads/2021/11/TWM-Banner.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_2048,w_2048/v1537765986/user-908174/profile/lxjtbf0x6ozn9pals5oo.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div>
        
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      
        <Products/>  
      </div>
  )
}

export default Home