import { Link, NavLink } from "react-router-dom";
export default function Navbar(){
    return(
        <>
        <header className="sticky-top bg-light">
            <nav className="container navbar navbar-expand-lg">
                <div className="container-fluid d-flex align-items-center justify-content-between p-1">
                    <Link className="navbar-brand" to="/">Pojok JB</Link>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/" style={({isActive})=>isActive ? {textDecoration: 'underline'} : undefined}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutme" style={({isActive})=>isActive ? {textDecoration: 'underline'} : undefined}>About</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
            </nav>
        <hr style={{border:'none', borderTop:'3px solid black', margin:'0px'}}/>
        </header>
        </>
    );
}