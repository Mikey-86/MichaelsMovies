import React from 'react'

function Person(props) {
  return (
    <div>
     <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  )
}

/* goes in const app 
 const name = "Mikey";
  const isTrue = true;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("lets gooooo");
    
  }, [counter])
  
  goes in div classsname=app
  <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
         <h1>{counter}</h1>
         <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>
  
  */

export default Person