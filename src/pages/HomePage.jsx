import React, {useState, useEffect} from 'react'
import CustomerListPage from './CustomerListPage';

export default function HomePage() {

    useEffect(() => {
        getMe()
    }, [])

    const [user, setUser] = useState({})

    const {email, firstName, lastName} = user;

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
    .then(data => setUser(data))
  }

    return (
        <div>
            <h1>HOME</h1>
            <h3>Current user</h3>
            <p>Email: {email}</p>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <h2>Customers</h2>
            <CustomerListPage />
        </div>
    )
}
