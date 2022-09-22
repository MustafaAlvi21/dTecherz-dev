import { useState } from "react"

// img
import icon1 from "./assets/ico1.PNG"
import icon2 from "./assets/ico2.PNG"


function App() {

  const [allTask, setAllTask] = useState([])
  const [task, setTask] = useState("")

  function addNewTask() {
    // const myArray = allTask
    // myArray.push({
    //   task,
    //   status: false
    // })
    // or 
    setAllTask(Ali => [...Ali, { task, status: false }])
  }

  function updateStatus(i, newStatus) {
    let myTaskList = allTask
    myTaskList[i].status = newStatus
    setAllTask(myTaskList)
  }


  return (
    <div className="App">
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

          <div className="taskSection">

            {
              allTask.length > 0 && allTask.map((myTask, i) => {
                return (
                  <div className="task" key={i}>
                    <div className="icon">
                      <input type="checkbox" defaultChecked={myTask.status}  onChange={() => updateStatus(i, !myTask.status) } />
                    </div>
                    <div className="text">
                      <p> {myTask.task} </p>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>

      {/* Input section */}
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={() => addNewTask()}> Add Task </button>
      <button onClick={() => console.log(allTask)}> Print all task </button>

    </div>
  );
}

export default App;