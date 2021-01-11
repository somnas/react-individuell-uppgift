import React, {useState} from 'react'
import './App.css';

function App() {

  
  const [formData, setFormData] = useState({
    email: "webb19@willandskill.se",
    password: "javascriptoramverk"
  })

  function handleOnChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData({...formData, [inputName]: inputValue})
    
  }
  
  return (
    <div className="App">
      <h1>LOGIN</h1>      
      <form>
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleOnChange}/>
        <label>Password</label>
        <input name="password" value={formData.password} onChange={handleOnChange}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
