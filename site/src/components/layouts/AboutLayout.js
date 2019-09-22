import React from 'react';

import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const useStyles = makeStyles(theme => ({
  postGridItem: {
    padding: theme.postGridItemPadding
  },
  link: {
    color: theme.palette.primary.main
  },
  blogCard: {
    maxWidth: '764px'
  },
  authorCardContent: {
    maxWidth: '500px', 
    padding:'0px' 
  }
}));

const AboutLayout = () => {
  const classes = useStyles();

  const author = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kamran_ali.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  
  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item className={classes.postGridItem} >
        <Typography variant='h1' align='center' >Are you Looking for Detailed Tech Tutorials?</Typography>
      </Grid>
      <Grid item className={classes.postGridItem} >
        <Typography variant='body1' align='center' >You've come to the right place.</Typography>
      </Grid>
      <Grid item className={classes.postGridItem}>
        <Card className={classes.blogCard}>
          <CardContent>
            <Typography variant='h4' component='h2' color='secondary' align='center' > ATech Guide</Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Founded in 2017, the intent of aTech Guide is to provide a holistic in-depth insights on a tech topic.
              <br/>
              We try to cover as much details and shed light on "Jargons" so that you do  <strong>NOT</strong> have to Jump around the web for better understanding.
              <br/>
              This main source of contents on this blog are from my learning as a passionate Tech enthusiast and professional Software Developer.
              <br/> <br/> 
              
              Contact us on <a className={classes.link} href="https://www.facebook.com/aTechGuide" target="_blank" rel="nofollow noopener noreferrer">FB page</a> or leave a Comment Below for any feedback/suggestions.
            
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.postGridItem}>
        <Card >
          <CardContent>
            <Typography variant='h4' component='h2' color='secondary' align='center' > Author</Typography>
          </CardContent>
              <Grid container justify='center' >
                <Grid item className={classes.postGridItem}>
                  <Img fixed={author.file.childImageSharp.fixed} />
                </Grid>
                <Grid item className={classes.postGridItem}>
                  <CardContent className={classes.authorCardContent }>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <a className={classes.link} href="https://kamranali.in/" target="_blank" rel="noopener noreferrer">Kamran Ali</a> works as a SDE-2 in Expedia.

                      <br/> <br/>

                      Coding for him is more of a recreation than profession which incessantly keeps him busy looking into new Stuff.

                      <br/> <br/>

                      He strongly believes that with a future proof tech stack we can quickly materialize our ideas Or can challenge an existing solution.

                    </Typography>
                  </CardContent>
                </Grid>

              </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AboutLayout;