import '../style/Navbar.css'

const Navbar = ({ navigate }) => {
    return ( 
        <div className="nav">
            <div className="divWrapper" >
                <div onClick={() => navigate('/')}>ברכה שבועית</div>
                <div onClick={() => navigate('/1')}>עומוסקופ</div>
                <div onClick={() => navigate('/2')}>רכילות</div>
                <div onClick={() => navigate('/4')}>אודות</div>
                <div onClick={() => navigate('/')}>הרשמה לשירות</div>
                <div onClick={() => navigate('/')}>מדור שירה וחיברון</div>
                <div onClick={() => navigate('/')}>כוס תה</div>
                <div onClick={() => navigate('/')}>מעקב השבוע</div>
                <div onClick={() => navigate('/')}>פורום השבוע</div>
            </div>
        </div>
    );
}
 
export default Navbar;