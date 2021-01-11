import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
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
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/customer-list">
          <CustomerListPage />
        </Route>
        <Route path="/customers/:id" component={CustomerDetailPage} />                 
        <Route path="/">
          <HomePage />
        </Route>
      </Switch> 
      
      <hr/>
      <button onClick={getMe}>Get Me</button>
      
    </div>
  );
}

export default App;
