import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class ProductDetial extends Component {
    getUrl = () => {
        console.log(this.props.match.params.id);
    }
    render() {
        const {data} = this.props;
        return(
            <div className="product_detail">
               <h2>Product Detials</h2>
               <h3>Name: {data.name} </h3>
               <h3>Id: {data.id} </h3>
               <h3>Price: {data.price} </h3>
               <h3>Quantity: {data.quantity} </h3>
               <h3>Desc: {data.desc} </h3>
               <h3>URL: {`products/${data.id}`} </h3>
            </div>
        );
    }
}
export default withRouter(ProductDetial);