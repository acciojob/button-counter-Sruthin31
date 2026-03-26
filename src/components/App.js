
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const[count,setCount] = useState(0);
  const handleClick = () =>{
    setCount(count+1);
  }
  return (


    <div>
        {/* Do not remove the main div */}
        <div>Button clicked {count} times</div>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
