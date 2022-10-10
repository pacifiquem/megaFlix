import React from 'react';
import Nav from '../components/nav';
import DefaultMovie from '../components/defaultMovie';

const Home:React.FC = () => {
    return (
        <div>
            <Nav />
            <DefaultMovie name='pac' discription='While hanging out after school, Charlie and his friends discover the headquarters of the world’s most powerful superhero hidden beneath his home. When villains attack, they must team up to defend the headquarters and save the world.' />
        </div>
    );
}



export default Home;