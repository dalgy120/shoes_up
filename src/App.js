import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<ItemListContainer greeting='Envío Gratis a Nivel Nacional ¡Solo Para Miembros!'></ItemListContainer>
			<ItemDetailContainer></ItemDetailContainer>
		</div>
	);
}

export default App;
