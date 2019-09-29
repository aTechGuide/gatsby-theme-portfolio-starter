import React from 'react';
import ProjectSnippet from "./post/projectSnippet";
import PaginationLinks from './PaginationLinks';
import { Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/**
 * This Grid is Used in Paginated Pages (post-list.js)
 */
const useStyles = makeStyles(theme => ({
  postGridItem: {
    padding: theme.spacing(2)
  }
}));

const ProjectPageGrid = ({posts, currentPage, numberOfPages}) => {
  const classes = useStyles();
  // const theme

  return (
    <Grid container justify='center' alignItems='center' direction='column'>
      <Grid item>
        <Grid container justify='center' component="main">
          {posts.map(({node}) => (
            <Grid key={node.id} item className={classes.postGridItem} > 
              <ProjectSnippet 
                key={node.id}
                data={node.frontmatter} />
              </Grid>
          ))}
          
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify='center' >
          <Grid item>
            <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectPageGrid;