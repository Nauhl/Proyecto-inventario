//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import styles from '../styles/Home.module.css';

export default function NavBar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

    {/** */}
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
    </div>
    </>
  )
}