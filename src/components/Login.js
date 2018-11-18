import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Tab from './Tab'

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    background:{
        background:"white"
    }
  });

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           items:[]
        }
      }
    render(){
        const { classes } = this.props;
      return(
          <div >
              <Tab></Tab>
              <div className={classes.background}>
              <TextField
          id="standard-password-input"
          label="User Name"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <div></div>
          <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

              </div>
          </div>
      )

  }

}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);