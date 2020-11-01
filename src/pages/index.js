//import Head from 'next/head'     // I change/move head to _document.js
import React from "react";
import styles from '../../styles/Home.module.css'

export default function Home() {

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <div className="jumbotron">
            <h1>Welcome to your Inventory</h1>
            <p>Here you will be able to ...lsdnljndkjnkg</p>
          </div>
        </h1>
      </div>

      <div className="row">

        <div className="col-6 col-md-4">
          <h6> Lorem text </h6>Lorem ipsum dolor sit amet, sed cu bonorum fierent. Referrentur delicatissimi ut nam. Vis aperiri praesent an, et nec choro delicata, ad eam illud veniam lobortis. Mel legendos salutatus patrioque no.</div>

        <div className="col-6 col-md-4">
          <h6> Lorem text </h6>Lorem ipsum dolor sit amet, sed cu bonorum fierent. Referrentur delicatissimi ut nam. Vis aperiri praesent an, et nec choro delicata, ad eam illud veniam lobortis. Mel legendos salutatus patrioque no.</div>

        <div className="col-6 col-md-4">
          <h6> Lorem text </h6>Lorem ipsum dolor sit amet, sed cu bonorum fierent. Referrentur delicatissimi ut nam. Vis aperiri praesent an, et nec choro delicata, ad eam illud veniam lobortis. Mel legendos salutatus patrioque no.</div>
      </div>
      &nbsp;

      {/* Card */}
      <div className={styles.card}>
        <div className="card border-info mb-3">
          <h3 className="card-header">Code components with React</h3>
          <div className="card-body text-success">
            <h5 className="card-title">Info card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      
      </>
  )
}
//<img src="../../utils/img/home_inventory.png" className="rounded float-right" alt="..."></img>

//<a href="#" className={styles.goToUpBTN}><i className="far fa-chevron-double-up"></i></a>