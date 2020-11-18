// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import styles from '../styles/Home.module.css';

export default function Footer() {

    return (
        <div className="footer " >
            <div className="container">
                <div className="row">
                    {/* Column */}
                    <div className="col">
                        <h4>Inventory</h4>
                        <ul className="list-unstyled">
                            {/* <li className="float-lg-right "><a href="">Back to top</a></li>  */}
                            <li><a href="https://github.com/Nauhl">GitHub</a>&nbsp;&nbsp;<i className="fab fa-github text-light mr-4 "></i></li>
                            <li><a href="#">Twitter</a>&nbsp;&nbsp;<i className="fab fa-twitter-square text-light mr-4 "></i></li>
                        </ul>
                    <p>Made by <a href="https://github.com/Nauhl">Me</a>.</p>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()}  INVENTORY | ALL right deserved | Terms | 
                        </p>
                        </div>
                </div>
            </div>
        </div>
    )
}
//&nbsp;&nbsp;&nbsp;&nbsp;