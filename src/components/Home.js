import './Home.css';
import ItemListContainer from './ItemListContainer';

function Home(props) {
    const { greeting } = props;


    return (
        <div className='homeContainer'>
            <span className='landing'>{greeting}</span>
            <ItemListContainer></ItemListContainer>
        </div>
    )
}

export default Home;