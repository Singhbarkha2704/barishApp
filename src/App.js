import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import SignupForm from './components/SignupForm';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/register' element={<SignupForm/>}/>
        </Routes>      
      </BrowserRouter>        
    </div>
  );
}

export default App;
