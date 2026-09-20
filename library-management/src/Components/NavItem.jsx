import { Link } from "react-router";

function NavItem({path, label}){
    return(
        <Link to={path}>
            {label}
        </Link> 
    )
}

export default NavItem