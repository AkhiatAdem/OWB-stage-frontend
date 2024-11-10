import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import { useEffect } from 'react'
import DataProvider from './Dumbdata'
import DataContext from './Datacontext'
import ManageProducts from './components/MangeProducts'
import EditProduct from './pages/EditProduct'
import AddProduct from './pages/AddProduct'
import Orders from './pages/Orders'
import Stock from './pages/Stock'
import Men from './pages/Men';
import Women from './pages/women';
import Kids from './pages/Kids';
import Offers from './pages/Offers';
import ProductDetails from './pages/ProductDetails';
const Comp = ()=>{
  const data = useContext(DataContext);
  console.log(data);
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
   
    if (location.pathname.startsWith('/dashboard') ) {
      navigate('/dashboard/menu', { replace: true });
    }
     }, [location.pathname, navigate]);
      return <>
      {location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/edit') || location.pathname.startsWith('/add')? "" : <Navbar/>}


        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>

            
          <Route path='/dashboard' element = {<Dashboard/>} >
            <Route path='/dashboard/menu' element={<ManageProducts/>}/>
            
            <Route path='/dashboard/orders' element={<Orders/>}/>
            <Route path='/dashboard/stock' element={<Stock/>}/>

          </Route>
          <Route path='/edit/:id' element={<EditProduct/>} />
          <Route path='/add' element={<AddProduct/>} />
          <Route path="/men" element={<Men />} />
       <Route path="/women" element={<Women />} />
       <Route path="/kids" element={<Kids />} />
       <Route path="/offers" element={<Offers />} />
       <Route path="/product-details" element={<ProductDetails />} />


        </Routes>
        {location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/edit') || location.pathname.startsWith('/add')? "" : <Footer/>}

      
      </>
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
    <Router>
    <Comp/>
    <App />
    </Router>
    </DataProvider>
  </StrictMode>,
);