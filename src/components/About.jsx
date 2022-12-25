import React, {Fragment} from 'react'
import { FiCheck } from 'react-icons/fi';
import Helmet from 'helmet';
const About = () => {
  return (
    <Fragment>
        <Helmet><title>About Us</title></Helmet>
          <h1 className='display-6 fw-bold text-center'>About Us</h1>
    <section className="about py-5">
        <img  className="about__image" src="https://www.arrowfurniture.com/wp-content/uploads/2018/12/decor-ideas-for-your-living-room-1-792x370.jpg" alt=""></img>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto mb-4 align-self-center">
            <h4 className="about__title">Who We Are?</h4>
            <p className="about__text">
            Barish is the best place to buy metal as well as wooden 
            furniture online in India. 
            </p>
            <p className="about__text">
            Here at Pepperfry, we are committed to offering our 
            customers the widest range in home furniture like tables, sofas, chairs for living room as well as 
            beds, sofa set, wardrobes, side tables,Our furniture is intelligently designed to give both comfort and 
            functionality; while we also go to great lengths to ensure that we source only the highest quality 
            raw materials and use the latest technologies to manufacture each individual piece.
            </p>
            <div className="about__icons d-flex align-items-center">
              <div
                className="about_icon d-flex align-items-center mr-md-5
              "
              >
                <FiCheck className="mr-2" />{' '}
                <span className="about__icon-text">
                  Living Room Furniture
                </span>
              </div>
              <div className="about_icon d-flex align-items-center">
                <FiCheck className="mr-2" />{' '}
                <span className="about__icon-text">
                  Dinning Room Furniture
                </span>
              </div>
            </div>
            <div className="about__icons d-flex align-items-center">
              <div className="about_icon d-flex align-items-center mr-md-5">
                <FiCheck className="mr-2" />{' '}
                <span className="about__icon-text">
                  OutDoor Furniture
                </span>
              </div>
              <div className="about_icon d-flex align-items-center">
                <FiCheck className="mr-2" />{' '}
                <span className="about__icon-text">
                  Home Decors
                </span>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-6 mx-auto align-self-md-center">
            <img src="https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?k=20&m=1293762741&s=612x612&w=0&h=STy_FF-jEOXvpFMBNSZmxsP8uhSvTep-Aw1LjrMoBPA=" alt="about us" className="about__image" />
          </div>
        </div>
      </div>
    </section>
          
    
      </Fragment>
  )
}

export default About
