// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
//import styles from "../styles/Home.module.css";

export default function Footer() {

    return (
        <footer >
        {/* <footer id="footer" className="bottom-0"> */}
            <div className="row">
                <div className="col-lg-12">
                    <ul className="list-unstyled">
                        <li className="float-lg-right"><a href="#top">Back to top</a></li>
                        <p className="float-lg-left">@ Vivenda 2020 &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/Nauhl">GitHub</a>&nbsp;&nbsp;<i className="fab fa-github text-light mr-4 "></i>
                        <a href="#">Twitter</a>&nbsp;&nbsp;<i className="fab fa-twitter-square text-light mr-4 "></i>
                        </p>
                    </ul>&nbsp;
                    <p>Made by <a href="https://github.com/Nauhl">Me</a>.</p>
                </div>
            </div>
        </footer>
    )
}
