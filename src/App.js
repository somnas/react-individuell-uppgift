import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';

function App() {

  const [customerList, setCustomerList] = useState([])
  
  

  

  

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

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setCustomerList(data.results))
  }
  
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          
        </Route>  
      </Switch> 
      
      <hr/>
      <button onClick={getMe}>Get Me</button>
      <button onClick={getCustomerList}>Get Customers</button>
      {customerList.map(item => {
        return <p key={item.id}>{item.name}</p>
      })}
    </div>
  );
}

export default App;
