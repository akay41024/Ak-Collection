import './App.css';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';
import { Switch, Route } from "react-router-dom";
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from './components/Order';
import OrderInfo from './components/OrderInfo';


function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/order/:id" component={Order} />
        <Route exact path="/order" component={OrderInfo} />
      </Switch>
    </>
  );
}

export default App;
