import '../style/Home.css';
import { useContext, useState, } from 'react';
import { DBContext } from '../context/SheetParsing';

const Home = () => {
    const [data, setData] = useState([]);
    const { bless } = useContext(DBContext);

    return (
        <div className="home">
            <p>ברכה שבועית</p>
            <p>{bless[0].bless}</p>
        </div>
    );
}

export default Home;