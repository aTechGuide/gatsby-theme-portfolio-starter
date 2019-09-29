import React, {useContext} from 'react';
import {graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { makeStyles } from '@material-ui/core/styles';
import {Typography, CardHeader, Card, CardActions, CardContent, IconButton} from '@material-ui/core';
import {Link} from '@material-ui/icons';

import Context from '../Context';
import Tags from './Tags';

const useStyles = makeStyles(theme => ({
  
  card: {
    width: 350,
    transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
    '&:hover': {
      transform: 'scale(1.03, 1.03)'
    }
  },
  cardActionBottom: {
    justifyContent: 'space-between',
    paddingTop: '0px'
  },
  cardContent: {
    paddingTop: '0px',
    paddingBottom: '0px'
  },
  chipRow: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  cardHeaderLink: {
    color: theme.palette.primary.dark,
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
}));

const ProjectSnippet = ({data: {title, description, date, tags, projectLink}}) => {

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
 
  return (
    <Card className={classes.card} raised component="article" >
      <CardHeader
        avatar={<Img fixed={contextData.icon.file.childImageSharp.fixed} alt={site.siteMetadata.title} />}
        action={
          <IconButton aria-label="github link" className={classes.cardHeaderLink} href={projectLink} target="_blank" rel="nofollow noopener noreferrer">
            <Link fontSize="large"/>
          </IconButton>
        }
        title={title}
        subheader={date}
      />
        <CardContent className={classes.cardContent}>    
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      
      <CardActions className={classes.cardActionBottom} disableSpacing>
        <div className={classes.chipRow}>
          <Tags tags={tags}/>
        </div>
      </CardActions>
    </Card>
  );
}

// For images we have 4:3 Aspect Ratio
export const postFrontMatter = graphql`
  fragment PostFrontMatter on MdxFrontmatter {
    title
    description
    date(formatString: "MMM D, YYYY")
    tags
    projectLink
}
`

export default ProjectSnippet;