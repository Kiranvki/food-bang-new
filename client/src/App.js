import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Vendor from './components/Vendor';
import Menu from './Utili/Menu';
import { ThemeProvider } from '@mui/material/styles';
import Pnf from './Utili/Pnf';
import LogIn from './components/Login';
import { Colors, Separator, theme } from './styles/theme';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SearchBox from './components/SearchBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuList from './components/MenuList';
import MenuBar from './Utili/Menu';
import UserDash from './components/screens/user/ResetPass';
import AdminDash from './components/screens/admin/AdminDash';
import Orders from './components/screens/other/Orders';
import ProtectedRoute from './middleware/ProtectedRoute'
import { GlobalState } from './GlobalContext';
import Profile from './components/screens/other/Profile';
import Users from './components/screens/other/Users';
// import Product from './components/screens/products/Product';
import ProductDetail from './components/screens/products/Product.Details';
import CreateProduct from './components/screens/products/CreateProduct';
import AdminProducts from './components/screens/admin/AdminProducts';
import Action from './styles/appbar/Action';
import Cart from './components/screens/products/Cart';
import CheckOut from './components/screens/products/CheckOut';
import OrderList from './components/screens/admin/OrderList';
import UpdateProduct from './components/screens/admin/UpdateProduct';
import UpdateProfile from './components/screens/admin/UpdateProfile';
import ResetPass from './components/screens/user/ResetPass';
import BeatLoader from "react-spinners/PulseLoader";
import PulseLoader from 'react-spinners/PulseLoader';
import ScrollToTop from './hooks/Scrool';

function App(props) {


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "Food-Bang-Home"
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000
    )
  }, [])

  const context = useContext(GlobalState);

  const [isLogged, setIsLogged] = context.authApi.isLogged;
  const [isAdmin, setIsAdmin] = context.authApi.isAdmin;
  const [isUser, setIsUser] = context.authApi.isUser;

  return (
    <div>
      {loading ? (
        <PulseLoader
          size={20}
          color={Colors.secondary}
          loading={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <MenuBar />
            <ToastContainer autoClose={2000} position="top-center" />
            <ScrollToTop>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/food-bang"} element={<Home />} />
                <Route path={"/home"} element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/vendor"} element={<Vendor />} />
                <Route path={"/menulist"} element={<MenuList />} />
                <Route path={"/login"} element={<LogIn />} />
                <Route path={"/signup"} element={<SignUp />} />
                <Route path={"/resetPass"} element={<ResetPass />} />
                <Route path={'/add'} element={
                  <ProtectedRoute auth={isLogged}>
                    <Profile />
                  </ProtectedRoute>
                } />
                
                <Route path={'/users'} element={
                  <ProtectedRoute auth={isLogged}>
                    <Users />
                  </ProtectedRoute>
                } />
                <Route path={'/orders'} element={
                  <ProtectedRoute auth={isLogged}>
                    <Orders />
                  </ProtectedRoute>
                } />
                <Route path={'/admin/allOrders'} element={
                  <ProtectedRoute auth={isLogged}>
                    <OrderList />
                  </ProtectedRoute>
                } />

                <Route path={'/product/create'} element={
                  <ProtectedRoute auth={isLogged}>
                    <CreateProduct />
                  </ProtectedRoute>
                } />
                <Route path={'/product/details/:id'} element={
                  <ProtectedRoute auth={isLogged}>
                    <ProductDetail />
                  </ProtectedRoute>
                } />
                <Route path={'/profile'} element={
                  <ProtectedRoute auth={isLogged}>
                    <Profile />
                  </ProtectedRoute>
                } />
                <Route path={'/products'} element={
                  <ProtectedRoute auth={isLogged}>
                    <AdminProducts />
                  </ProtectedRoute>
                } />
                <Route path={'/checkout/:final'} element={
                  <ProtectedRoute auth={isLogged}>
                    <CheckOut />
                  </ProtectedRoute>
                } />
                <Route path={'/product/update/:id'} element={
                  <ProtectedRoute auth={isLogged}>
                    <UpdateProduct />
                  </ProtectedRoute>
                } />
                <Route path={'/profile/update/:id'} element={
                  <ProtectedRoute auth={isLogged}>
                    <UpdateProfile />
                  </ProtectedRoute>
                } />
                <Route path={'/product/cart'} element={
                  <ProtectedRoute auth={isLogged}>
                    <Cart />
                  </ProtectedRoute>
                } />
                <Route path={'/admin/dashboard'} element={
                  <ProtectedRoute auth={isLogged}>
                    <AdminDash />
                  </ProtectedRoute>
                } />
                <Route path={"/*"} element={<Pnf />} />

              </Routes>
            </ScrollToTop>
            <SearchBox />
            <Separator />
            <Footer />
          </BrowserRouter>
        </ThemeProvider >
      )}
    </div>

  );
}


export default App;
