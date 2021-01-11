import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';

function App() {

  const [customerList, setCustomerList] = useState([])
  
  const [formData, setFormData] = useState({
    email: "webb19@willandskill.se",
    password: "javascriptoramverk"
  })

  function handleOnChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData({...formData, [inputName]: inputValue})
    
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const url = "https://frebi.willandskill.eu/api-token-auth/"
    const payload = {
      email: formData.email,
      password: formData.password
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("WEBB20", data.token)
    })
  }

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
      <h1>LOGIN</h1>      
      <form onSubmit={handleOnSubmit}>
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleOnChange}/>
        <label>Password</label>
        <input name="password" value={formData.password} onChange={handleOnChange}/>
        <button type="submit">Login</button>
      </form>
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
