import React from "react"
import {useStaticQuery, graphql} from 'gatsby';

import {CssBaseline} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import {Provider} from '../Context';
import theme from '../../styles/theme';

/**
 * This component wraps all the pages
 * Here we've created a Top Level Theme provider which will pass down to all the components of the App
 */

const muiTheme = createMuiTheme(theme)

const BaseLayout = ({ children }) => {
  
  /**
   * Loding ICON which can be used everywhere
   */
  //const icon = 'icon'
  const icon = useStaticQuery(graphql`
    query {
      file(name: {eq: "icon"}) {
        childImageSharp {
          fixed(width:60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Provider value={{icon}}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        { children }
      </ThemeProvider>
    </Provider>
  )
}

export default BaseLayout
