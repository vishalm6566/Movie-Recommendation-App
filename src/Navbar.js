import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <NavLink to="" className="navbar-brand" style={{ color: "White" }}>Movie Recommendation App</NavLink>

                </div>
            </nav >
        </div >
    )
}

export default Navbar
