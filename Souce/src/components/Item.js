import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import axios from 'axios'
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 250,
    marginLeft:10,
    marginTop:10,
    float:'left'

  },
  mcard: {
    width: "70%",
    marginLeft:"15%",
    marginTop:"5%",
  },
  media: {
    height: 200,
    marginTop:10,
    width:"100%",
    objectFit:"contain"
  },
  button:{
    flexGrow: 1,
    flexBasis: 0
  },
  price:{
    color:'mediumseagreen'
  },
};

class Item extends React.Component {
  
  addtocart =  (id,qty) => async() => {
    console.log(id)
    console.log(qty)
    var url ="http://devopscloud.pythonanywhere.com/cart_view/"
    let res = await axios.get(url,{
      params: {
      product_Id:id,
      quantity:qty
    }    
  })
  if(res.data.auth==="fail"){
    window.location="http://devopscloud.pythonanywhere.com/login/"
  }else{
    alert("Added to Cart")
    this.props.getItemList()
  }

   }
  render(){
    const { classes } = this.props;
    let data = this.props.item
    let size = window.innerWidth;
    if(size>600){
      return(
        <Card className={classes.card}>
          <CardActionArea>
          <img
            className={classes.media}
            src={'http://devopscloud.pythonanywhere.com/media/'+data.imageurl} alt="No"/>
          <CardContent>
            <Typography variant="title" noWrap  >
             {data.Productname}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2" className={classes.price}>
            $ {data.price}
            </Typography>
  
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button variant="contained" color="primary" className={classes.button} >
        BUY 
        </Button>
        <Button variant="contained" color="secondary" className={classes.button} onClick={ this.addtocart(data.product_Id,1)}>
        ADD
        </Button>
        </CardActions>
      </Card>  
    )
    }else{
      return(
        <Card className={classes.mcard}>
          <CardActionArea>
          <img
            className={classes.media}
            src={'http://devopscloud.pythonanywhere.com/media/'+data.imageurl} alt="No" />

          <CardContent>
            <Typography  variant="title" noWrap >
             {data.Productname}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2" className={classes.price}>
              $ {data.price}
            </Typography>
  
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button variant="contained" color="primary" className={classes.button}  >
        BUY 
        </Button>
        <Button variant="contained" color="secondary" className={classes.button} onClick={this.addtocart(data.product_Id,1)}>
        ADD
        </Button>
        </CardActions>
      </Card>  
    )

    }
  }

}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);
