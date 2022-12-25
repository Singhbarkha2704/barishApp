import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/redux-hooks";

const Navbar = () => {
  const cart = useAppSelector(state => state.cart.cart); //subscribe data of state, it returns updated values of state
  const wishlistQuantity = useAppSelector(state => state.wishlist.wishlist);
  // calculate total quantity of items
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach(item => {
      total+=item.quantity
    })
    return total;
  }


  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 text-success" to="/">
          Barish Shop
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={({isActive})=>(isActive ? 'active' : 'inactive')} aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
                   
            <li className="nav-item">
              <NavLink className={({isActive})=>(isActive ? 'active' : 'inactive')} to='/products'>
                Products
              </NavLink>
            </li>
                      
            <li className="nav-item">
              <NavLink className={({isActive})=>(isActive ? 'active' : 'inactive')} to='/about'>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({isActive})=>(isActive ? 'active' : 'inactive')} to='/contact'>
                Contact
              </NavLink>
            </li>          
          </ul>
          
          <div className="buttons">
            <NavLink to='/wishlist'>
              <i className="fa fa-heart text-secondary"></i>
              <span className="badge badge-warning" id='lblWishCount'>{ wishlistQuantity.length || 0}</span>
            </NavLink>

            <NavLink to="/cart">
              <i className="fa fa-shopping-cart text-dark" style={{fontSize:'20px'}} />
              <span className="badge badge-warning" id='lblCartCount'>({getTotalQuantity() || 0})</span>
            </NavLink>  

            <NavLink to="/" className="btn btn-outline-primary ms-2">
              <i className="fa fa-sign-in"/> Login
            </NavLink>

            <NavLink to="/register" className="btn btn-outline-success ms-2">
              <i className="fa fa-user-plus"/> Register
            </NavLink>                  
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
