import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';

import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/PageLayout";
import Seo from "../components/seo/Seo";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cover: {
    maxWidth: '100%',
    marginBottom: '50px'
  },
  headline: {
    marginBottom: '20px'
  }
}));

const Index = () => {

  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query fetchIndexDetails {
      site {
        siteMetadata {
          author
        }
      }
      file(name: {eq: "cover"}) {
        publicURL
      }
    }  
  `)

  return (
    <Layout pageTitle="Home Page">
    <Seo 
      title="Home Page"
      description="Home Page"
      slug="/"  />

    <PageLayout>

      <img src={data.file.publicURL} alt={data.site.siteMetadata.author} className={classes.cover} />
      <Typography component='h1' variant='h1' className={classes.headline}>
        Hi, I'm Kamran Ali, SDE II @Expedia Inc.
      </Typography>
      <Typography component='h2' variant='h5'>
        I'm a Full Stack Developer, Currently focussing on Big Data Technologies
      </Typography>
      
    </PageLayout>
  </Layout>
  );
}

export default Index;