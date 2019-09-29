import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ProjectSnippet from '../post/projectSnippet';

import { Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  postGridItem: {
    padding: theme.spacing(2)
  }
}));

const TagPostsLayout = ({data, pageContext}) => {

  const classes = useStyles();

  return (
    <Grid container justify='center' >
        {data.allMdx.edges.map(({node}) => (
          <Grid key={node.id} item className={classes.postGridItem}>
            <ProjectSnippet 
                key={node.id}
                data={node.frontmatter} />
          </Grid>
        ))}
      </Grid>
  );
}

export default TagPostsLayout;