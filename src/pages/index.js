//import Head from 'next/head'     // I change/move head to _document.js
import React from "react";
import styles from '../../styles/Home.module.css'
import MyApp from '../pages/_app';

export default function Home() {

  return (
    <>
      {/* <div className={styles.container}>
        <h1 className={styles.title}> */}
          <div className="jumbotron">
            <h1>Welcome to your Inventory</h1>
            <p>Here you will be able to ...lsdnljndkjnkg</p>
          </div>
        {/* </h1>
      </div> */}

      <div className="row">

        <div className="col-6 col-md-4">
          <h2>Example body text</h2>
          <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
          <p><small>This line of text is meant to be treated as fine print.</small></p>
          <p>The following is <strong>rendered as bold text</strong>.</p>
          <p>The following is <em>rendered as italicized text</em>.</p>
          <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
        </div>

        <div className="col-6 col-md-4">
          <h6> Lorem text </h6>Lorem ipsum dolor sit amet, sed cu bonorum fierent. Referrentur delicatissimi ut nam. Vis aperiri praesent an, et nec choro delicata, ad eam illud veniam lobortis. Mel legendos salutatus patrioque no.</div>

        <div className="col-6 col-md-4">
          <h6> Lorem text </h6>Lorem ipsum dolor sit amet, sed cu bonorum fierent. Referrentur delicatissimi ut nam. Vis aperiri praesent an, et nec choro delicata, ad eam illud veniam lobortis. Mel legendos salutatus patrioque no.</div>
      </div>
    & nbsp;

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