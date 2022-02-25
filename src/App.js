import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';


function App() {
	return (
		<div className="App">
			<CartProvider>
				<BrowserRouter>
					<Navbar/>
					<Routes>
						<Route exact path='/' element={<Home greeting='Envío Gratis a Nivel Nacional ¡Solo Para Miembros!' />} />
						<Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
						<Route exact path='/item/:id' element={<ItemDetailContainer />} />
						<Route exact path='/cart' element={<Cart />} />

					</Routes>
				</BrowserRouter>
			</CartProvider>
		</div>
	);
}

export default App;
