import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import './App.css';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerListPage from './pages/CustomerListPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {

  

  function getMe() {
    const url = "https://frebi.willandskill.eu/api/v1/me/"
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  
  
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/customers/create">Create Customer</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>   
        <Route path="/customers/create">
          <CustomerCreatePage />  
        </Route>       
        <Route path="/customers/:id" component={CustomerDetailPage} />                 
        <Route path="/customers">
          <CustomerListPage />
        </Route>      
        <Route path="/">
          <HomePage />
        </Route>
      </Switch> 
      
      <hr/>     
    </div>
  );
}

export default App;
