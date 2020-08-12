import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Products extends Component {
    clickHandle = (id) => {
        this.props.history.push("/products/" + id);
    };

    getDataList = () => {
       this.setState({
           dataList:this.props.dataList,
       })
    }
    render() {
        // this.getDataList();
        const {dataList} = this.props;
        console.log(dataList);
        return(
            <div className="produts_list">
                <h2>All Products:</h2>
                {
                    dataList.map(e => {
                    return(
                        <div className="select_product" key={e.name}>
                            <p  onClick={() => this.clickHandle(e.id)}> {e.name} </p>
                        </div>
                    );
                    })
                }
            </div>
        );
    }
}
export default withRouter(Products);