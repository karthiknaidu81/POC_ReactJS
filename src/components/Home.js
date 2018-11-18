import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tab from './Tab'
import ListView from './List'
import Item from './Item'

import List from '@material-ui/core/List';
import axios from 'axios'

import Button from '@material-ui/core/Button';
const styles = theme => ({
    button: {
      position:'fixed',
      bottom:10,
      right:10,
    },
    extendedIcon: {
    },
  });
  
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           items:[],
           cart:[],
           view:false,
        }
        this.getItems    = this.getItems.bind(this);
        this.payment = this.payment.bind(this)
      }
      
      componentDidMount() {
        this.getItems();
      }
      cartView =  () => {
        this.setState({
          view: true,
        });
      };

      homeView =  () => {
        this.setState({
          view: false,
        });
      };
      payment= ()=>{
        alert("Payment Gateway Need to Integrate")
      }
      getItems = async () =>{
        let res = await axios.get("http://devopscloud.pythonanywhere.com/product_view/")      
        this.setState({items:res.data}) 
        let {data} = await axios.get("http://devopscloud.pythonanywhere.com/cart_view_data/")      
        this.setState({cart:data}) 
        console.log(data)
        }    
    render(){

        const { classes } = this.props;
      return(
          <div>
              <Tab showCart={this.cartView.bind(this)} showHome={this.homeView.bind(this)}></Tab>
              {this.state.view ?(
                <div>
                <List>
                  {
                    this.state.cart.map((item, i) => <ListView item={item} key={i} />)

                }           
              </List>
              <Button variant="extendedFab" onClick={this.payment} color="secondary" className={classes.button}>CHECK OUT</Button>
              </div >
              ):(             
                <div >

                  {
                    this.state.items.map((item, i) => <Item item={item} key={i} getItemList={this.getItems.bind(this)} />)
                }           

    
                </div>
    )


              }
                </div>

      )

  }

}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);