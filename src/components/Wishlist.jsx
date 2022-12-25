import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishlist } from '../store/wishlist';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector, useAppDispatch } from '../store/redux-hooks';

const Wishlist = () => {
    const wishlistItems = useAppSelector(state => state.wishlist.wishlist)
    const dispatch = useAppDispatch();

    const removeWishlistHandle = (itemId) => {
        dispatch(removeFromWishlist(itemId));
        toast.dark('Item removed from Wishlist!', {autoClose: 1200})
    }
  return (
      <div>
          <div className="container py-2 my-2">
              <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bold text-center'>Wishlist</h1>
                        <hr/>
                    </div>
                </div>
              <div className='row justify-content-center'>
        {
            wishlistItems?.map(product => 
            (
                <>
                    <div className='col-md-3 mb-3 product-outer' key={product.id}>
                        <div className="card h-70 text-center product-inner">                                
                            <Link to={`/products/${product.id}`}>
                                <img src={product.image} className="card-img-top product-img" alt={product.title} height='250px' />
                            </Link>
                            <div className="card-body">
                                <p className="card-title mb-0">{product.title.substring(0,12)}..</p>
                                <p className="card-text fw-bold">$ {product.price}</p>
                            </div>
                            <button className='btn btn-danger wish-btn fa fa-heart-o' onClick={()=>removeWishlistHandle(product.id)}>Remove From Wishlist</button>
                        </div>
                    </div>
                </>
            )
                       
            )
                  }
                  </div>
          </div>
          <ToastContainer/>
    </div>
  )
}

export default Wishlist
