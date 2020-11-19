//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import styles from '../styles/Home.module.css';

export default function NavBar() {

  return (
      // <nav className="navbar navbar-expand-lg navbar-dark bg-danger" >
        //   <a className="navbar-brand" href="/"><i className="fas fa-home"></i> &nbsp; Inventory</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNavDropdown">
          //     <ul className="navbar-nav ml-auto">
            //       <li className="nav-item">
              //         <a className="nav-link" href="/items"><i className="fas fa-box"></i> &nbsp; Items</a>
    //       </li>
    //       <li className="nav-item dropdown">
              //         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                //           More
    //   </a>
    //         <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                //           <a className="dropdown-item" href="/categories"><i className="fas fa-window-restore"></i> &nbsp; Categories</a>
    //           <>
                  //             <a className="dropdown-item" href="/conditions"><i className="far fa-calendar-check"></i> &nbsp; Condition</a>
    //             <a className="dropdown-item" href="/locations"><i className="far fa-compass"></i> &nbsp; Locations</a>
    //           </>
    //           <a className="dropdown-item" href="/rooms"><i className="far fa-list-alt"></i> &nbsp; Rooms</a>
    //         </div>
    //       </li>
    //       <li className="nav-item">
              //         <a className="nav-link" href="/about"><i className="fas fa-user-astronaut"></i> &nbsp; About us</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>LOGO</h3>
          </div>
          <ul className="lisst-unstyled components">
            <li>
            <a href="/">Inventory</a>
            </li>
            {/* <li className="active">
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Home</a>
              <ul className="collapse lisst-unstyled" id="homeSubmenu">
                <li>
                  <a href="#">Home 1</a>
                </li>
                <li>
                  <a href="#">Home 2</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="/items"><i className="fas fa-box"></i> &nbsp;Items</a>
            </li>
            <li>
              <a href="/categories"><i className="fas fa-window-restore"></i> &nbsp; Categories</a>
            </li>
            
            <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">More</a>
              <ul className="collapse lisst-unstyled" id="pageSubmenu">
                <li>
                  <a href="/rooms"><i className="far fa-list-alt"></i> &nbsp; Rooms</a>
                </li>
                <li>
                  <a href="/locations"><i className="far fa-compass"></i> &nbsp; Locations</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/conditions"><i className="far fa-calendar-check"></i> &nbsp; Condition</a>
            </li>
          </ul>
        </nav>

        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button type="button" id="sidebarCollapse" className="btn btn-success"  >
                <i className="fas fa-align-left"> &nbsp; Details</i>
              </button>
            </div>
          </nav>
          <br /><br />
          <h2>Collapsive sidebar</h2>
          <p>ksuhrihfygfyugrjehdsufiunhcbidyehrhiejwnowufhiwr</p>

          <p>ksuhrihfygfyugrjehdsufiunhcbidyehrhiejwnowufhiwr</p>

          <div className="line"></div>
          <h3>Lorem Ipsum</h3>

          <p>ksuhrihfygfyugrjehdsufiunhcbidyehrhiejwnowufhiwr</p>

          
          <div className="w-1/2 flex items-center justify-center">
              <img className="w-full" src="/undraw_Booking_re_gw4j.svg" />
            </div>
        </div>
      </div>
  )
}

/*
<i className="fas fa-window-restore"></i>
<i className="far fa-calendar-check"></i>
<i className="far fa-compass"></i>
<i className="far fa-list-alt"></i>
*/