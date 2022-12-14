import React from 'react';
import { NavLink } from "react-router-dom";
function Navbar ()
{
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={'/'} className="nav-link active" href="#">Tutorials</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/add'} >Add</NavLink>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;