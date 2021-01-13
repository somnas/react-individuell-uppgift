import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerListPage from './pages/CustomerListPage';
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
`

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
        <Ul>
          <Link to="/customers">Customers</Link>
        </Ul>
        <Ul>
          <Link to="/customers/create">Create Customer</Link>
        </Ul>      
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>   
        <Route path="/customers/create">
          <CustomerCreatePage />  
        </Route>
        <Route path="/customers/:id/edit" component={CustomerUpdatePage} />
        <Route path="/customers/:id" component={CustomerDetailPage} />                 
        <Route path="/customers">
          <CustomerListPage />
        </Route>      
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>      
           
    </div>
  );
}

export default App;
