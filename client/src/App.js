import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './pages/layout/Layout';
import NoPage from './pages/404/NoPage';
import Orders from './pages/orders/Orders';
import Products from './pages/products/Products';
import Login from './pages/login/LoginPage';
import Register from './pages/register/RegisterPage';
import AddOrderPage from './pages/addorder/AddOrderPage';
import { setOrders, setProducts } from './store/ordersSlice';
import { orders, products } from './components/DataStorage';

import './App.css';
function App() {
	const dispatch = useDispatch();
	dispatch(setOrders(orders));
	dispatch(setProducts(products));

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Orders />} />
					<Route path="products" element={<Products />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="add-order" element={<AddOrderPage />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
