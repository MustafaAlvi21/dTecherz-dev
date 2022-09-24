import { useState } from "react"



function TaskList() {
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
        <>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={() => addNewTask()}> Add Task </button>

            <div className="taskSection">
                {
                    allTask.length > 0 && allTask.map((myTask, i) => {
                        return (
                            <div className="task" key={i}>
                                <div className="icon">
                                    <input type="checkbox" defaultChecked={myTask.status} onChange={() => updateStatus(i, !myTask.status)} />
                                </div>
                                <div className="text">
                                    <p> {myTask.task} </p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}


export default TaskList;