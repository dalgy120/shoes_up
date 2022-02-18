import './Home.css';

function Home(props) {
    const { greeting } = props;


    return (
        <div className='homeContainer'>
            <span className='landing'>{greeting}</span>
        </div>
    )
}

export default Home;