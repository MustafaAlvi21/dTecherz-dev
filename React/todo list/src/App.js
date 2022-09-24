import { useState } from "react"

// img
import icon1 from "./assets/ico1.PNG"
import icon2 from "./assets/ico2.PNG"

// Components
import About from "./components/about"
import Tasklist from "./components/taskList"

function App() {



  const name = "Khan Sahab"

  function msg() {
    alert("Hi, how can I help you? ");
  }


  return (
    <div className="App">
      
      
      {/* Component */}
      <About username={name} des={"I'm a student"} />
      
      <div className="container">
        <div className="row main px-2 py-3">
          <header className="row head">
            <div className="col">
              <img src={icon1} alt="ico" width={"25px"} />
            </div>
            <div className="col">
              <img src={icon2} alt="ico" width={"50px"} style={{ float: "right" }} />
            </div>
          </header>
          <h2>What's up, Mustafa!</h2>

          <div className="row">
            <h5>CATEGORIES</h5>
          </div>

          <div className="row categories">
            <div className="categoryCard">
              <small>40 tasks</small>
              <h6>Business</h6>
              <div className="categoryHr">
                <div className="categoryHr1"></div>
                <div className="categoryHr2"></div>
              </div>
            </div>
            <div className="categoryCard">
              <small>18 tasks</small>
              <h6>Personal</h6>
              <div className="categoryHr">
                <div className="categoryHr1"></div>
                <div className="categoryHr2"></div>
              </div>
            </div>
            <div className="categoryCard">
              <small>3 tasks</small>
              <h6>Birthday Events</h6>
              <div className="categoryHr">
                <div className="categoryHr1"></div>
                <div className="categoryHr2"></div>
              </div>
            </div>
          </div>

          <div>
            <h6 className="as12"> Today Tasks</h6>
          </div>

          {/* TASK LIST COMPONENT */}
          <Tasklist />

        </div>
      </div>


    </div>
  );
}

export default App;