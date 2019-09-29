import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Link from './Link';

const useStyles = makeStyles(theme => ({
  menuToggleButton: {
    color: theme.palette.primary.contrastText
  }
}));

const PopupMenu = ({menuLinks}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>       
      <IconButton
        aria-label="Menu Items"
        aria-haspopup="true"
        className={classes.menuToggleButton}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        getContentAnchorEl = {null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      {
          menuLinks.map(link => (
            <MenuItem key={link.name} onClick={() => handleClose() }> 
              <Link to={link.link}>{link.name}</Link>
            </MenuItem>
          ))
      }
      </Menu>
    </>
  );
}

export default PopupMenu;