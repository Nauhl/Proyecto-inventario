import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styles from "../styles/Home.module.css";

export default function Footer() {

    return (
        <footer id="footer">
            <div className="container" className={styles.foooter}>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact" data-aos="fade-up">
                                <h3 className="text-center text-light">Inventory</h3>
                                <h5 className="text-center text-light">
                                    Apodaca, Nuevo Leon<br />
                                    México <br /><br />
                                    {/* <strong>Phone:</strong> +1 5589 55488 55<br /> */}
                                    <p className="text-center text-light">Email:</p> Nauhl.ValdezBenavides@gmail.com<br />
                                </h5>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="300">
                                <h4>My Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                <div className="social-links mt-3">
                                    <a href="https:github.com/Nauhl"><i className="fab fa-github text-white mr-4 text-center"></i></a>
                                    <a href="#"><i className="fab fa-twitter-square text-white mr-4 text-center"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Inventory</span></strong>. All Rights Reserved
                        </div>
                    <div className="credits"><a>
                        Designed by me</a>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}

{/* <div className={styles.foooter} >
                
                <div>
                    <h5 className="text-center text-light">Designed by me </h5> 
                    &nbsp;
                    <a href="https://github.com/Nauhl"><i className="fab fa-github text-white mr-4 text-center"></i></a>
                    <a href="#"><i className="fab fa-twitter-square text-white mr-4 text-center"></i></a>
                    <a className=".text-*-center text-light">@ Vivenda 2020 </a>
                </div>
            </div> */}   

            //style="display: inline;"
