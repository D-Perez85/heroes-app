import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
    
  const navigate =  useNavigate();
  const handleLogout = () => {
    navigate('/login', {
      replace: true
    });
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/"></Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/marvel">
            MARVEL
          </NavLink>
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/dc">
            DC
          </NavLink>
          <NavLink className="nav-item nav-link" to="/search">
            SEARCH
          </NavLink>
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">Damian</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>LOGOUT</button>
        </ul>
      </div>
    </nav>
  );
};
