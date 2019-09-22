import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/PageLayout";
import Seo from "../components/seo/Seo";


const Index = () => {

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
      

      <img src={data.file.publicURL} alt={data.site.siteMetadata.author}/>
      
    </PageLayout>
  </Layout>
  );
}

export default Index;