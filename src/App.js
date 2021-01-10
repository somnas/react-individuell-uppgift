import React, {useState} from 'react'
import './App.css';

function App() {

  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  function handleOnChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
    
  }
  
  return (
    <div className="App">
      <h1>LOGIN</h1>      
      <form>
        <label>Email</label>
        <input name="email" onChange={handleOnChange}/>
        <label>Password</label>
        <input name="password" onChange={handleOnChange}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
