import NavItem from "./NavItem";
function Navbar(){
    const navItems = [
    { path: "/", label: "Home" },
    { path: "/genre", label: "Genre" },
    { path: "/books", label: "Books" },
    { path: "/member", label: "Member" }
   ];
    return(        
        <div>
            <h1>Library-Management</h1><br />
            {navItems.map(item =>(<NavItem path={item.path} label={item.label} />))}
        </div>
        
    )
}

export default Navbar