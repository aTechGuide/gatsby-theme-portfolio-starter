import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';

import PageLayout from "../components/layout/PageLayout";
import Seo from "../components/seo/Seo";
import { Typography } from '@material-ui/core';
import Layout from '../components/layout/layout';

const useStyles = makeStyles(theme => ({
  cover: {
    maxWidth: '100%',
    marginBottom: '50px'
  },
  headline: {
    marginBottom: '20px'
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

  const {site : {siteMetadata: {author, twitterId, linkedInId}}, file: {publicURL}} = useStaticQuery(graphql`
    query fetchIndexDetails {
      site {
        siteMetadata {
          author
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
      description="Home Page"
      slug="/"  />

    <PageLayout>

      <img src={publicURL} alt={author} className={classes.cover} />
      <Typography component='h1' variant='h1' className={classes.headline}>
        Hi, I'm Kamran Ali, SDE II @Expedia Inc.
      </Typography>
      <Typography component='h2' variant='h5'>
        I'm a Full Stack Developer, Currently focussing on Big Data Technologies
      </Typography>
      <Typography variant='body1'>
        Feel free to reach out at 
        <a href={`https://twitter.com/${twitterId}`} target="_blank" rel="noopener noreferrer" className={classes.link}> Twitter </a> |
        <a href={`https://www.linkedin.com/in/${linkedInId}`} target="_blank" rel="noopener noreferrer" className={classes.link}> LinkedIn </a>
      </Typography>
      
    </PageLayout>
  </Layout>
  );
}

export default Index;