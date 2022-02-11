import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<ItemListContainer greeting='Envío Gratis a Nivel Nacional ¡Solo Para Miembros!'></ItemListContainer>
		</div>
	);
}

export default App;
