import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [fullname,setFullname]=useState({fname:'',lname:''});


  const inputEvent = (e) => {
    // setName(e.target.value);
    
    const value = e.target.value;
    const name = e.target.name;

    setFullname ((prevalue) => {
      if(name === 'fname'){
        return {
          fname:value,
          lname:prevalue.lname
        }
      }
      else if(name === 'lname') {
        return {
          fname:prevalue.fname,
          lname:value,
        }
      }
    });
  
  };

  const onSubmits = (e) => {
    e.preventDefault();
    alert("foam submitted");
  };

  return (
    <div className='main'>

      <foam onSubmit={onSubmits}>

    <div>
      <h1>FOAM {fullname.fname} {fullname.lname}</h1>
     
        <input
        type = "email"
        placeholder= "enter email"
        name="fname"
        onChange={inputEvent}
        />
        <br/>
        <br/>
        <input
        type="password"
        placeholder="enter pass.."
        name="lname"
        onChange={inputEvent}
        />
        <br/>
        <br/>
      <button type="submit"> submit  </button>
    </div>
    </foam>
    </div>
  );
}

export default App;
