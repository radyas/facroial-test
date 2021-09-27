import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar navbar-light w-100 mb-5" style={{backgroundColor: "#c4e1f5"}}>
            <div className="pt-3">
                <ul>
                    <li>
                    <Link className='btn btn-outline-dark btn-lg' to="/">Home</Link>
                    </li>
                    <li>
                    <Link className='btn btn-outline-dark btn-lg' to="/contacts">Contacts</Link>
                    </li>
                    <li>
                    <Link className='btn btn-outline-dark btn-lg' to="/test">Pricing</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;