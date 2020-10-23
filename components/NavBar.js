import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <img src="../utils/img/home_inventory.png" className="img-fluid" width="100px" height="100px" alt=""></img>
        <a className="navbar-brand" href="/">Inventory</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/items">Items</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
        </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/categories">Categories</a>
                <>
                  <a className="dropdown-item" href="/conditions">Condition</a>
                  <a className="dropdown-item" href="/locations">Locations</a>
                </>
                <a className="dropdown-item" href="/rooms">Rooms</a>

              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About us</a>
            </li>
          </ul>
        </div>
      </nav>

      { /* FOOTER */}
      <div className="container">
      <footer className="page-footer bg-blue">
        <div className="bg-success">
          <div className="container">
            <div className="row py-4 d-flex align-items-center">

              <div className="col-md-12 text-center">

                <a href="#"><i className="fab fa-github text-white mr-4"></i></a>
                <a href="#"><i className="fab fa-twitter-square text-white mr-4"></i></a>

              </div>

            </div>
          </div>
        </div>
      </footer>

      <div className="container text-center text-md-left mt-5">
        <div className="row">
          <div className="col-md-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Inventory</h6>
            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" ></hr>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit leo duis tempus pellentesque platea dictumst, bibendum hendrerit suspendisse quisque consequat nulla erat suscipit tempor sapien nec. Vestibulum quam arcu posuere hendrerit maecenas et, placerat parturient eu mattis curae sagittis facilisis, a netus ridiculus ante ad. Urna aliquam sem mauris pellentesque nam neque vitae, ultrices sagittis molestie egestas et interdum viverra quisque, aliquet curae auctor mattis semper augue.

Suscipit sociosqu dictumst ac penatibus conubia eros leo donec rhoncus porttitor, magna sapien vitae tincidunt sagittis feugiat sodales curae tellus, aptent cum dictum proin netus non habitasse rutrum fusce. In justo risus sem et sagittis pharetra euismod suspendisse vestibulum aenean platea accumsan felis, phasellus cum vitae gravida netus tristique erat ultrices taciti ridiculus ac. Vivamus imperdiet fringilla ad id cum non lacus inceptos euismod, metus placerat pulvinar magnis dapibus rhoncus suspendisse.</p>
          </div>
          
          <div className="col-md-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Vivendo @ 2020</h6>
            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" ></hr>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}