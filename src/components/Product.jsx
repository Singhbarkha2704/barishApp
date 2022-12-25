import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import spinnerGif from '../assets/animation/icons8-dots-loading.gif';

import { addToCart } from '../store/cartSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from './../store/redux-hooks';

const Product = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch(); //for dispatching add reducer
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []
    );

    const Loading = () => {
        return (
            <>
                <img src={spinnerGif} alt='loading..' height='2.124rem' width='2.124rem' style={{margin:'6.125rem'}}/>
            </>
        )   
    };

    const ShowProduct = () => {
        const handleAdd = (product) => {
            console.log(`clicked`)
            const cartProducts = dispatch(addToCart(product))
            toast.success('Item added to Cart!', {autoClose:1200})
            console.log(cartProducts);
        };

        return (
            <>
                <div className="col-md-6 single-prod">
                    <img src={product.image} alt={product.title} height='400px' width='400px'/>
                </div>

                <div className="col-md-6 mb-3">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                        <hr className='text-primary'/>
                    </h4>
                    <h1 className='display-5 text-primary prod-title'>{product.title}</h1>
                    <p className='lead fw-bold'>Rating {product.rating && product.rating.rate} <i className='fa fa-star text-warning' /></p>
                    <h3 className='display-7  my-4'><span className='text-dark fw-semibold'>Price:</span> $ {product.price}</h3>
                    <p className='lead'><span className='text-dark fw-semibold'>Description: </span>{product.description}</p>

                    <button 
                        className='btn fa fa-shopping-cart btn-cart' 
                        style={{backgroundColor:'#3471D4', border:'none', padding:'0.915rem', boxShadow:'3px 3px 3px #3471D1', color:'white'}} 
                        onClick={()=>handleAdd(product)}
                    >  
                    Add to Cart
                    </button>

                    <Link to='/cart'><button className='ms-4 btn-cart' style={{border:'#3471D4',  padding:'0.559rem', boxShadow:'3px 3px 3px #3471D0', backgroundColor:'white'}}>  Go to cart </button></Link>
                </div>
            </>
        )
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
            <ToastContainer/>
        </div>
  )
}

export default Product