import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import spinnerGif from '../assets/animation/icons8-dots-loading.gif'
import { fetchProductData, STATUSES } from '../store/productSlice';
import { addToWishlist } from '../store/wishlist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from './../store/redux-hooks';
import axios from 'axios';
import { fetchByCategory } from '../services/api';

const Products = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.product.data)
    const status=useAppSelector(state=>state.product.status)
    // const {data, status}=useAppSelector(state=>state.product)
    
    // const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);

    // let componentMounted = true;

    useEffect(() => {
        dispatch(fetchProductData())
        

        // const getProducts = async () => {
        //     setLoading(true);
        //     const response = await fetch(`https://fakestoreapi.com/products`);
        //     if (componentMounted) {
        //         setData(await response.clone().json()); //clone of a response obj and stored in diff var
        //         setFilter(await response.json())
        //         setLoading(false);
        //         console.log(`filter`, filter);
        //     }
        //     return () => {
        //         componentMounted = false;
        //     }           
        // }
        // getProducts();
    }, []);

    if (status === STATUSES.LOADING) {
        return (
            <>
                <img src={spinnerGif} alt='loading..' />
            </>
        )  
    }
           
    if (status === STATUSES.ERROR){
        return (<h2>Something went wrong!</h2>)
    }

    const filterProduct = async (chosenCategory) => {
        // const filterData = data.filter(item => item.category === chosenCategory);
        // setFilter(filterData);
    //      const response = await axios.get(`https://fakestoreapi.com/products/category/${chosenCategory}`)
    // console.log(response);
            // setFilter(response.data)

        const response = await fetchByCategory(chosenCategory)
        console.log(response);
        setFilter(response)
        // const res=await fetch(`https://fakestoreapi.com/products/category/${chosenCategory}`)
        // setFilter(await res.json())
    };

    const addWishlistHandler = (product) => {
        dispatch(addToWishlist(product));
        toast.success('Item added to Wishlist!', {autoClose: 1200})
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center pb-5 mb-5">
                    <button
                        className='btn btn-outline-success me-2'
                        onClick={() => { setFilter(data) }}
                    >
                        ✔ All
                    </button>

                    <button
                        className='btn btn-outline-success me-2'
                        onClick={()=>{filterProduct("men's clothing")}}
                    >
                        👔 Men's Clothing
                    </button>
                    <button
                        className='btn btn-outline-success me-2'
                        onClick={() => { filterProduct("women's clothing") }}
                    >
                        👗 Women's Clothing
                    </button>
                    <button
                        className='btn btn-outline-success me-2'
                        onClick={() => { filterProduct("jewelery") }}
                    >
                        💍 Jewellery
                    </button>
                    <button
                        className='btn btn-outline-success me-2'
                        onClick={()=>{filterProduct("electronics")}}
                    >
                        💻 Electronics
                    </button>
                </div>

                {
                    filter?.map(product => 
                    (
                            <div className='col-md-3 mb-3 product-outer' key={product.id}>
                                <div className="card h-70 text-center product-inner">
                                    
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.image} className="card-img-top product-img" alt={product.title} height='250px' />
                                    </Link>
                                    <div className="card-body">
                                        <p className="card-title mb-0">{product.title.substring(0,12)}..</p>
                                        <p className="card-text fw-bold">$ {product.price}</p>
                                    </div>
                                    <button className='btn btn-danger wish-btn fa fa-heart-o' onClick={()=>addWishlistHandler(product)}> Add to Wishlist</button>
                                </div>
                            </div>
                        )
                       
                    )
                }
            </>
        )
    }
    return (
        <div>  
            <div className="container py-2 my-2">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bold text-center'>Latest Products</h1>
                        <hr/>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    {
                        status===STATUSES.IDLE && (<ShowProducts/>)
                    }
                </div>
            </div>
            <ToastContainer/>
        </div>
  )
}

export default Products;