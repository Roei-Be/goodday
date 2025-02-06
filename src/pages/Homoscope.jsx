import { useContext } from "react";
import { DBContext } from "../context/SheetParsing";
import "../style/Homoscope.css";

const Homoscope = () => {

    const {homoscope} = useContext(DBContext)       

    return (
        <div className="homoscope">
            {homoscope && homoscope.map((item, index) => {
                return (
                    <div key={index} className="homoscopeItem">
                        <p>{item.horoscope}</p>
                        <p>{item.content}</p>
                    </div>
                )
            })}
        </div>
    );
}
 
export default Homoscope;