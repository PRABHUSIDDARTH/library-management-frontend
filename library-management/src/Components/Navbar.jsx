import {Link} from "react-router";
function Navbar(){
    return(
        <div>
            <h1>Library-Management</h1><br />
            <Link to="/">Home </Link>
            <Link to="/genre">Genre </Link>
            <Link to="/books">Books </Link>
            <Link to="/member">Member </Link>
        </div>
        
    )
}

export default Navbar