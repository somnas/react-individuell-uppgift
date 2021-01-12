import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function LoginPage() {

    const [formData, setFormData] = useState({
    email: "Erik.Somnas@yh.nackademin.se",
    password: "javascriptoramverk"
    })

    const history = useHistory()    

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
      history.push("/customers")
    })    
  }

  function handleOnChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData({...formData, [inputName]: inputValue})    
  }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>Email</label>
                <input name="email" value={formData.email} onChange={handleOnChange}/>
                <label>Password</label>
                <input name="password" value={formData.password} onChange={handleOnChange}/>
                <button type="submit">Login</button>
          </form>
        </div>
    )
}
