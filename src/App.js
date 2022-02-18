import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar/>
				<Routes>
					<Route exact path='/' element={<Home greeting='Envío Gratis a Nivel Nacional ¡Solo Para Miembros!' />} />
					<Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
					<Route exact path='/item/:id' element={<ItemDetailContainer />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
