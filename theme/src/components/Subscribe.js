import React from 'react';
import {Card, CardContent, TextField, Typography, Button} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import {useStaticQuery, graphql} from 'gatsby';

const Subscribe = () => {

  const theme = useTheme();
  const { site : {siteMetadata : {options : {showSubscriptionWidget, mailchimpURL}}} } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            options {
              showSubscriptionWidget
              mailchimpURL
            }
          }
        }
      }
    `
  )

  return (
      { showSubscriptionWidget } && <Card>
        <CardContent>
          <Typography variant='h5' component='h3' color='primary' align='center' >
            Stay in touch
          </Typography>
          <Typography variant='body1' >
            Receive E Mail notification of Latest Tutorials
          </Typography>
          <form action={mailchimpURL} 
            method="post" 
            name="mc-embedded-subscribe-form" 
            target="_blank" noValidate autoComplete="off">
            <TextField
              id="mce-EMAIL"
              label="Email"
              margin="normal"
              variant="outlined"
              type="email"
              name="EMAIL"
              fullWidth
            />
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
              <input type="text" name="b_835b966c8e4fb4811d20a1b0c_1ccb85525c" tabIndex="-1" defaultValue="" />
            </div>
            <Button
              type="submit"
              fullWidth
              {...theme.button}        
            >
            Subscribe
          </Button>
          </form>
        </CardContent>
      </Card>
  );
}

export default Subscribe;