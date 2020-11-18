import App from "next/app";
import React from 'react';
import Head from "next/head";
//import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function MyApp({ Component, pageProps }) {

  return (

    <div>
      <Head>

        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
        {/* <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" /> */}

        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link> */}

        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>

        {/* <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> */}
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> */}

      </Head>
      <NavBar />

      <Component {...pageProps} />

      <div>
        <Footer />
        <style jsx global>
          {
            `
            .footer {
              color: white;
              background: #B00020;
              padding-top: 3em;
              position: relative;
              bottom: 0;
              width: 100%;
              
            }
            
            container { 
            display: flex;
            flex-direction: column;
            min-height: 100vh
            padding-right: 15px;
            padding-left: 15px;
          
            }
          container-wrap { 
            flex: 1
          }
          `

          }
        </style>
      </div>

    </div>
  )
}