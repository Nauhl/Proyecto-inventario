import App from "next/app";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import PropTypes from "prop-types";
import React from "react";
import theme from "../../utils/theme";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp(props) {
  
  const { Component, pageProps, user } = props;

  return (
    <React.Fragment>
    <Head>
    <title>Inventory</title>
    </Head>

    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NavBar {...pageProps} />
        <Container fixed >
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    <Component {...pageProps} />
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};

  // is where I put everything I wants to show in every page 