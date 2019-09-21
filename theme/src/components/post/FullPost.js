import React, {useContext} from 'react';
import {CardHeader, Card,CardActions,CardContent, useMediaQuery} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useStaticQuery, graphql} from 'gatsby';
import Img from "gatsby-image"

import {Fab} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import Context from '../Context';
import Tags from './Tags';
import postTheme from '../../styles/postTheme';
import ScrollTop from './ScrollTop';

/**
 dt, .word{color: blue;}
dd {color: darkblue; padding-left: 40px}
dt, dd {font-weight: bold}

.heading1, .irabhighlight{color: darkred;}
.heading2{color: darkmagenta;}
.exception{color: red; display: inline;}
.bg-yellow{background-color: yellow;}
.bg-cyan{background-color: lightcyan;}
.bg-green{background-color: lightgreen;}
 */
const useStyles = makeStyles(theme => postTheme(theme));

const FullPost = ({frontmatter, children}) => {
  const classes = useStyles();
  const contextData = useContext(Context)

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const matches = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const iconSize = matches ? "large" : "small"

  return (
    <>
    <Card component="article">
      <CardHeader
        // avatar={<Avatar aria-label="Recipe" className={classes.avatar}>AB</Avatar>}
        avatar={<Img fixed={contextData.icon.file.childImageSharp.fixed} alt={site.siteMetadata.title} />}
        title={frontmatter.pagetitle}
        subheader={frontmatter.update_date !== frontmatter.date ? `Published: ${frontmatter.date} • Updated: ${frontmatter.update_date}` : `Published: ${frontmatter.date}`}
        titleTypographyProps={{variant: 'h1', component: 'h1'}}
        className={classes.header}
        id="back-to-top-anchor"
      />
      <CardContent>
        {children}
      </CardContent>
      
      <CardActions disableSpacing >
        <Tags tags={frontmatter.tags}/>
      </CardActions>   
    </Card>
    <ScrollTop>
      <Fab color="secondary" size={iconSize} aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  </>
  );
}

export default FullPost;