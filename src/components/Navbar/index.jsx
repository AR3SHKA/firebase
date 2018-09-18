import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import { MdMenu, MdInbox, MdDrafts } from 'react-icons/md';
import logo from './logo.svg';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    marginLeft: -12,
    marginRight: 20,
  },
  toolbar: {
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
  },
});

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
    };
  }

  toggleDrawer = (open) => () => {
    this.setState({
      drawer: open,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Drawer open={this.state.drawer} onClose={this.toggleDrawer(false)}>
          <div
            style={{ width: 250 }}
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <List component="nav">
              <ListItem button>
                <ListItemIcon>
                  <MdInbox />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <MdDrafts />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MdMenu />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}
            >
              <img
                src={logo}
                height={36}
                style={{ marginRight: 12 }}
                alt="Firebase"
              />
              Firebase
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navbar);
