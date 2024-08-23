import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    return (  
        <nav className="navbar">
            <h1> The Dojo Blog</h1>
            <div className="links">
            <Link to="/" className="">Home</Link>
            <Link to="/create" >New Blog</Link>
               

            </div>
        </nav>
    );
}
 
export default NavBar;