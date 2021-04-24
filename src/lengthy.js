import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [fullname,setFullname]=useState({email:'',pass:''});


  const inputEvent = (e) => {
    
    const value = e.target.value;            

    //distructuring
    // const {value,name} = e.target

    setFullname ((prevalue) => {

    //   return {
    //     ...prevalue,
    //     [name] : value
    //   }

      if(name === 'email'){
        return {
          email:value,
          pass:prevalue.pass
        }
      }
      else if(name === 'pass') {
        return {
          email:prevalue.email,
          pass:value,
        }
      }
    });
  
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert('foam submitted');
  };

  return (
    <div className='main'>

      <foam onSubmit={onSubmit}>

    <div>
      <h1>FOAM {fullname.email} {fullname.pass}</h1>
     
        <input
        type = "email"
        placeholder= "enter email"
        name="email"
        onChange={inputEvent}
        value= {fullname.email}
        />
        <br/>
        
        <input
        type="password"
        placeholder="enter pass.."
        name="pass"
        onChange={inputEvent}
        value= {fullname.pass}
        />
      <button type="submit"> submit  </button>
    </div>
    </foam>
    </div>
  );
}

export default App;
