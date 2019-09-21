import React, {useContext} from 'react';
import {graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button, CardHeader, Card, CardActionArea,CardActions,CardContent} from '@material-ui/core';

import Context from '../Context';
import Tags from './Tags';

const useStyles = makeStyles(theme => ({
  cardActionBottom: {
    justifyContent: 'space-between',
    paddingTop: '0px'
  },
  chip: {
    margin: theme.spacing(1),
  },
  chipRow: {
    display: 'flex',
  },
  card: {
    width: 350,
    transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
    '&:hover': {
      transform: 'scale(1.03, 1.03)'
    }
  },
  cardContent: {
    paddingTop: '0px',
    paddingBottom: '0px',
    height: '100px',
  }
}));

const PostSnippet = ({pagetitle, body, date, tags, slug, fixed}) => {

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
      <CardActionArea href={"/" + slug}>
        <Img fixed={fixed} draggable={false} title={pagetitle} alt={pagetitle} />
      </CardActionArea>
        <CardHeader
        avatar={<Img fixed={contextData.icon.file.childImageSharp.fixed} alt={site.siteMetadata.title} />}
        title={pagetitle}
        subheader={date}
      />
        <CardContent className={classes.cardContent}>    
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      
      <CardActions className={classes.cardActionBottom} disableSpacing>
        <div className={classes.chipRow}>
          <Tags tags={tags}/>
        </div>
        <Button href={`/${slug}/`} size="small" color="primary" variant='outlined'>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

// For images we have 4:3 Aspect Ratio
export const postFrontMatter = graphql`
  fragment PostFrontMatter on MdxFrontmatter {
    pagetitle
    summary
    date(formatString: "MMM D, YYYY")
    tags
    slug
    image {
      childImageSharp {
        fixed(width: 350, height: 280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
}
`

export default PostSnippet;