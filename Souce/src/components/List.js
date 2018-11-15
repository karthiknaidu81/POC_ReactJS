import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  right:{
      paddingRight:20,
      color:'mediumseagreen'
  }
});

class ListView extends React.Component {


  render() {

    let data = this.props.item
    const { classes } = this.props;
    return (
      <div className={classes.root}>
            <ListItem button>
              <Avatar alt="Remy Sharp" src={'http://devopscloud.pythonanywhere.com/media/'+data.imageurl} />
              <ListItemText primary={data.Productname}  />
              <ListItemSecondaryAction className={classes.right}>
              $ {data.price} 
              </ListItemSecondaryAction>
            </ListItem>
        <Divider />
      </div>
    );
  }
}

ListView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListView);