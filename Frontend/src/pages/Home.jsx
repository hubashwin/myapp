import { Link } from 'react-router-dom';

const Home = () => {

    return (<>
        <button>
            <Link to='/product'>
                Shop Now
            </Link>
        </button>
    </>
    );
}
export default Home;