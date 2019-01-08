import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ChartComponent from './Charts'
import StockComponent from './Stocks'
import StockHistoryComponent from './StockHistory'

const Router = () => (
  <main>
    <Switch>
      {/* <Route exact path='/' component={ChartComponent}/> */}
      <Route path='/chart' component={ChartComponent}/>
      <Route path='/stock' component={StockComponent}/>
      <Route path='/stock-history' component={StockHistoryComponent}/>
    </Switch>
  </main>
)

export default Router