import React from 'react';

import {Grid, IconButton, Tooltip} from '@material-ui/core';
import {ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return({
  activeLink: {
    fontWeight: 'bold',
    color: 'Red'
  },
  postGridItem: {
    padding: theme.spacing(2)
  }
})});

const PaginationLinks = ({currentPage, numberOfPages}) => {

  const classes = useStyles();

  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage = '/page/' + (currentPage - 1).toString()

  const nextPage = '/page/' + (currentPage + 1).toString()
  
  return (
    <Grid container alignItems="center" component="nav">
      <Grid item>
        {
          isFirst ? (
              <IconButton disabled aria-label="back button" >
                <ArrowBackIos >Back</ ArrowBackIos>
              </IconButton>
          ) : (
            <Tooltip title="Previous Page">
              <IconButton href={previousPage} aria-label="back button">
                <ArrowBackIos >Back</ ArrowBackIos>
              </IconButton>
            </Tooltip>
          ) 
        }
      </Grid>
      
        {Array.from({length: numberOfPages}, (_, i) => 
          currentPage === i + 1 ? (
            <Grid item key={`page-number${i + 1}`} className={classes.postGridItem} >
              <Link to={`${'/page/' + (i + 1)}/`} activeClassName={classes.activeLink}>{i + 1}</Link>
            </Grid>
          ) : (
            <Grid item key={`page-number${i + 1}`} className={classes.postGridItem}>
              <Link to={`${'/page/' + (i + 1) }/`}>{i + 1}</Link>
            </Grid>
          )
        ) }

      <Grid item>
        {
          isLast ? (
            <IconButton href={nextPage} disabled aria-label="forward button">
              <ArrowForwardIos />
            </IconButton >
          ) : (
            <Tooltip title="Next Page">
              <IconButton href={nextPage} aria-label="forward button">
                <ArrowForwardIos />
              </IconButton>
            </Tooltip>
          )
        }
      </Grid>
    </Grid>
  );
}

export default PaginationLinks;