import React, { useState } from "react";
import Child from '../components/Child'

const Parent = (props) => {
//   
    const [input, setInput]=useState()
   
  return (
    <div>
      <h2>Parent Component</h2>
      <input 
        type="text" 
        placeholder="type something here" 
        onChange={(e) => setInput(e.target.value)}
      ></input>
      
      <Child userInput={input}/>
    </div>
  );
};

export default Parent;
