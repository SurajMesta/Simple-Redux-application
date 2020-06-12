import React from 'react';
import logo from './logo.svg';
import './App.css';
import Addform from './components/Addform'
import ProductList from './components/ProductList'
class App extends React.Component{
  render(){
    return(
      <React.Fragment>
    <Addform/>
    <ProductList/>
      </React.Fragment>
    )
  }
}

export default App;
