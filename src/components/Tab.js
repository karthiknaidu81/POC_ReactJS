import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textAlign:'left'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list:{
    color:"white"
  }
};

class Tab extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    left: false,
    };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  login = () => {
    
    window.location="http://devopscloud.pythonanywhere.com/login/"
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  updateShow({target}){
    this.props.changeView(target.value)
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>        
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
        <List > 
            <ListItem button className={classes.list}>
            welcom to pushc asda;d;asd
            </ListItem>
        </List>
          </div>
        </Drawer>

        <AppBar position="static">
          <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.toggleDrawer('left', true)}/>
          </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow} >
              Photos
            </Typography>
            <IconButton
                  aria-haspopup="true"
                  color="inherit"
                  onClick={ this.props.showHome }
                >
                  <HomeIcon />
                </IconButton>
                <IconButton
                  aria-haspopup="true"
                  onClick={ this.login }
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <IconButton
                  aria-haspopup="true"
                  color="inherit"
                  onClick={ this.props.showCart }

                >
                  <ShoppingBasket />
                </IconButton>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Tab.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(Tab);