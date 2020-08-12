import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import MyProfile from './MyProfile';
import AboutUsPage from './AboutUsPage';
import Header from './Header';
import Products from './Products';
import dataJson from '../../exercise-2/mockups/data.json'
import ProductDetial from './ProductDetial';

class App extends Component {
  getDataList = (dataJson) => {
    const dataList = [];
    Object.values(dataJson).forEach(e => {
      dataList.push(e);
  })
    return dataList;
  }
  render() {
    const dataList = this.getDataList(dataJson);
    return (
      <div className="app">
        <Router>
          <Header dataList={this.getDataList(dataJson)}></Header>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/my-profile" component={MyProfile}/>
            <Route exact path="/products" render={() => (
              <Products dataList={dataList}/>
            )}/>
            <Route exact path="/about-us" component={AboutUsPage}/>
            {
              dataList.map(e => {
               return <Route key={e.id} exact path="/products/:id"render={() => (
                <ProductDetial data={e}/>
              )}/> 
              })
            }
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
