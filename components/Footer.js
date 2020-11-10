import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styles from "../styles/Home.module.css";

export default function Footer() {

    return (
        <div className={styles.foooter}>
            <div >
                <h5 className="text-center text-dark">Designed by me </h5>
                <p className="text-center text-light">Email:</p> <p> Nauhl.ValdezBenavides@gmail.com </p>
                <p className="text-center text-light">@ Vivenda 2020 &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/Nauhl"><i className="fab fa-github text-dark mr-4 text-center"></i></a>
                    <a href="#"><i className="fab fa-twitter-square text-dark mr-4 text-center"></i></a></p>
            </div>
        </div>
    )
}

{/* <div className={styles.foooter} >
        
                <div>
                    <h5 className="text-center text-light">Designed by me </h5> 
                    &nbsp;
                    <a href="https://github.com/Nauhl"><i className="fab fa-github text-white mr-4 text-center"></i></a>
                    <a href="#"><i className="fab fa-twitter-square text-white mr-4 text-center"></i></a>
                    <p className="text-center text-light">Email:</p> Nauhl.ValdezBenavides@gmail.com<br />
                    <a className=".text-*-center text-light">@ Vivenda 2020 </a>
                </div>
            </div> */}

            //style="display: inline;"
