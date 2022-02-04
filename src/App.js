import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<ItemListContainer greeting='Hola Mundo!'></ItemListContainer>
		</div>
	);
}

export default App;
