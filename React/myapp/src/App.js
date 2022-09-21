import './App.css';
import { useState } from "react"

function App() {
  const [myState, setMyState] = useState("mustafa")
  let a1 = "mustafa"

  function update() {
    a1 = "ali";
    setMyState("ali")

    console.log(a1);
  }


  const [count, setCount] = useState(0)
  function increment() {
    setCount(count+1)
  }
  function decrement() {
    setCount(count-1)
  }

  return (
    <div className="App">
      <h2>myState wali state ki value: {myState}</h2>
      <h2>a1 variable ki value: {a1}</h2>
      <button onClick={() => update()}>Click me</button>    
      
      <hr />

      <h1>Welcome to Counter</h1>
      <h3>Count: { count }</h3>
      <button onClick={() => increment()} style={{ backgroundColor: "lightblue", marginRight: "10px" }}> + </button>
      <button onClick={() => decrement()}> - </button>
    </div>


  );
}

export default App;
