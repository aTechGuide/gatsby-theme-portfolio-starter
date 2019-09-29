import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';

import PageLayout from "../components/layout/PageLayout";
import Seo from "../components/seo/Seo";
import { Typography } from '@material-ui/core';
import Layout from '../components/layout/layout';

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cover: {
    maxWidth: '100%',
    marginBottom: '50px'
  },
  headline: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: "2.5rem",
    }
  },
  focusArea: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
      fontSize: "1.5rem"
    }
  },
  link: {
    color: theme.palette.secondary[900],
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
}));

const Index = () => {

  const classes = useStyles();

  const {site : {siteMetadata: {author, headline, focusArea, twitterId, linkedInId}}, file: {publicURL}} = useStaticQuery(graphql`
    query fetchIndexDetails {
      site {
        siteMetadata {
          author
          headline
          focusArea
          twitterId
          linkedInId
        }
      }
      file(name: {eq: "cover"}) {
        publicURL
      }
    }  
  `)

  return (
    <Layout>
    <Seo 
      title="Home Page"
      // description="Home Page" Description should be picked from configuration for Index Page
      slug="/"  />

    <PageLayout>
      <main className={classes.main}>
        <img src={publicURL} alt={author} className={classes.cover} />
        { headline ? <Typography component='h1' variant='h1' className={classes.headline}> {headline} </Typography> : null } 
        { focusArea ? <Typography component='h2' variant='h5' className={classes.focusArea}> {focusArea} </Typography> : null} 
        <Typography variant='body1'>
          Feel free to reach out at 
          { twitterId ? <a href={`https://twitter.com/${twitterId}`} target="_blank" rel="noopener noreferrer" className={classes.link}> Twitter </a> : null }
          { linkedInId ? <a href={`https://www.linkedin.com/in/${linkedInId}`} target="_blank" rel="noopener noreferrer" className={classes.link}> | LinkedIn </a>: null}
        </Typography>
      </main>
    </PageLayout>
  </Layout>
  );
}

export default Index;