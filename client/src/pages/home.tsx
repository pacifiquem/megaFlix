import Nav from '../components/nav';
import DefaultMovie from '../components/defaultMovie';
import Movies from '../components/movies';


const Home:React.FC = () => {

    return (
        <div>
            <Nav />
            <DefaultMovie />
            <Movies />
        </div>
    );
}



export default Home;