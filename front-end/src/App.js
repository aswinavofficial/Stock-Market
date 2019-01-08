import React, { Component } from 'react';
import './App.css';
import ChartComponent from './Charts'
import StockComponent from './Stocks'
import StockHistoryComponent from './StockHistory'
import Router from './Router'
import NavigationBar from './NavigationBar';


class App extends Component {

  componentDidMount(){
    document.title = "Stock Market"
  }
  render() {
    return (
      <div className="App">
      <NavigationBar/>

        <Router />
      </div>
    );
  }
}

export default App;
