import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

export default function NavBar() {
  return (
    <div> 
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand text-light" href="/"><i className="fas fa-home"></i> &nbsp; Inventory</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-light" href="/items"><i className="fas fa-box"></i> &nbsp; Items</a>
            </li> 
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
        </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/categories"><i className="fas fa-window-restore"></i> &nbsp; Categories</a>
                <>
                  <a className="dropdown-item" href="/conditions"><i className="far fa-calendar-check"></i> &nbsp; Condition</a>
                  <a className="dropdown-item" href="/locations"><i className="far fa-compass"></i> &nbsp; Locations</a>
                </>
                <a className="dropdown-item" href="/rooms"><i className="far fa-list-alt"></i> &nbsp; Rooms</a>

              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/about"><i className="fas fa-user-astronaut"></i> &nbsp; About us</a>
            </li>
          </ul>
        </div>
      </nav>

      { /* FOOTER */} 
      <div className="container">
        <footer className="page-footer bg-blue" id="Footer" >
          <div className="bg-success">
            <div className="container">
              <div className="row py-4 d-flex align-items-center">

                <div className="col-md-12 text-center">
                <h4 className="text-center text-light" >Inventory </h4> 
                <a className="text-center text-light">Designed by me</a> &nbsp;
                  <a href="https://github.com/Nauhl"><i className="fab fa-github text-white mr-4"></i></a>
                  <a href="#"><i className="fab fa-twitter-square text-white mr-4"></i></a>
                  <a className="text-right text-light">@ Vivenda 2020 </a>
                </div>

              </div>
            </div>
          </div>
        </footer>
        
      </div>
    </div>
  )
}