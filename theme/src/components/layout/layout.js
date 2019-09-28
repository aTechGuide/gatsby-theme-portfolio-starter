import React from "react"
import { makeStyles } from '@material-ui/core/styles';

import Footer from '../Footer';
import Header from "../header"

/**
 * This component has base outline of the website
 */

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {children}
      {/* <Footer/> */}
    </div>
  )
}

export default Layout
