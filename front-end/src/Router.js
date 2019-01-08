import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ChartComponent from './Charts'
import StockComponent from './Stocks'
import StockHistoryComponent from './StockHistory'
import TopStockComponent from './TopStocks'

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={TopStockComponent}/>
      <Route path='/chart' component={ChartComponent}/>
      <Route path='/stock' component={StockComponent}/>
      <Route path='/stock-history' component={StockHistoryComponent}/>
      <Route path='/top' component={TopStockComponent}/>


    </Switch>
  </main>
)

export default Router