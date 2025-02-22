import '../style/Home.css';
import { useContext } from 'react';
import { DBContext } from '../context/SheetParsing';

const Home = () => {
    const { bless } = useContext(DBContext);

    return (
        <div className="home">
            <div className="landing">
                <div className="yellowstrip left"></div>
                <div className="yellowstrip right"></div>
                <div className="dashed"></div>
                <div className='scroll'>⬇️גלול... הברכה מחכה לך⬇️</div>
                <div className='scroll1'>עוד טיפה</div>
                <div className="blessWrapper">
                    <p>ברכה שבועית</p>
                    <p>{bless && bless[0].bless}</p>
                </div>
            </div>
        </div>
    );
}

export default Home;