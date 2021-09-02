import React from "react"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light">
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <ul className="nav navbar-nav">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/activity">Activity</Link>
                        <Link className="nav-item nav-link" to="/profile">Profile</Link>
                        <Link className="nav-item nav-link" to="/quotes">Quotes</Link>
                        <Link className="nav-item nav-link" to="/search">Search</Link>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
export default Navbar;