import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import MyOrderScreen from './components/MyOrderScreen';
import CheckoutScreen from './components/CheckoutScreen';
import Header from './components/Header'
import { Provider } from 'react-redux';
import store from '../src/store';

export default function App() {
  return (
    <Provider store={store}>
    <Router>
    <Header/>
        <Switch>
          <Route  path="/myOrderScreen">
            <MyOrderScreen />
          </Route>
          <Route path="/detailScreen">
            <DetailScreen />
          </Route>
          <Route path="/checkoutScreen">
            <CheckoutScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>

    </Router>
    </Provider>
  );
}



