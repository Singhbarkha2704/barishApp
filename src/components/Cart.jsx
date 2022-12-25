import React from 'react'
import { Link } from 'react-router-dom';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector, useAppDispatch } from '../store/redux-hooks';

const Cart = () => {
  const  items  = useAppSelector(state => state.cart.cart);
  const dispatch = useAppDispatch();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    items.forEach(item => {
      totalQuantity += item.quantity
      totalPrice+=item.quantity*item.price
    })
    return {totalPrice, totalQuantity}
  }

  const removeHandler = (itemId) => {
    dispatch(removeFromCart(itemId))
    toast.success('Item removed from cart!',{autoClose:1200})
  }

  return (
    <div>
        <h3 className='heading'>Cart</h3>
          <div className='px-lg-5 py-lg-5' >
        {items.length === 0 ?
          <div className='empty-cart'>
            <h2>Nothing added to cart..!</h2>
            <Link to='/products'>
              <button className='btn btn-warning fa fa-arrow-left'>Continue Shopping</button>
            </Link>
          </div> : (
            items.map(item => (
              <div key={item.id} className='row mb-4' >
                <div className='col-md-4'>
                  <img
                    src={item.image}
                    alt={item.title}
                    height='200px'
                    width='180px'
                  />
                </div> 
                <div className='col-md-4'>
                  <h3>{item.title}</h3>
                  <p className='lead fw-bold' style={{ color: 'green' }}>Price: $ {item.price*item.quantity}</p>   
                  <div className='cartItem__incrDec'>
                    <div className='btn-group'>
                      <button className='btn btn-primary me-2' onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                      <p className='me-2 text-primary' style={{ fontSize: '1.123rem', fontWeight:'bolder', paddingTop:'5px'}}>{item.quantity}</p>
                      <button className='btn btn-primary' onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                    </div>
                  
                  </div>
                </div>
                <div className='col-md-3'>
                  {/* <button className='btn fa fa-close' onClick={() => dispatch(removeFromCart(item.id))}></button> */}
                  <button className='btn fa fa-close' onClick={()=>removeHandler(item.id)}></button>
                </div>
                <hr/>
              </div>                      
            ))
         
             ) }
      </div>  
      <hr /><hr />
      {items.length>0 &&
        <div className='cart__summary'>
          <div className='cart__content'>
            <h3 className='cartSummary__heading'>Cart Summary</h3>
            <p className='cart__total'>total ({getTotal().totalQuantity} items) : <strong>${getTotal().totalPrice}</strong></p>
          </div>
        
        </div>
      }
      <ToastContainer/>
    </div>
  )
}

export default Cart
