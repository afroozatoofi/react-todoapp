//import React, { Component } from 'react';
import React, { useState } from "react";

//import reactDom, { render } from "react-dom";

//import uuidv4 from "uuid/v4";

import { toast } from "react-toastify";

import SimpleContext from "../Components/Context/SimpleContext";

const GlobalState = (props) => {
  const [getTasks, setTasks] = useState([
    {
      id: 1,
      builtIn: true,
      tasktitle: "React(Built-in)",
      taskdetail:
        "You must learning react as well as you like, also you should create to-do list ",
    },
    {
      id: 2,
      builtIn: true,
      tasktitle: "ENG Skill(Built-in)",
      taskdetail: "Speaking English is very important and you should do it!",
    },
  ]);
  const [getTask, setTask] = useState("");

  const handleDeleteTask = (id) => {
    const tasks = [...getTasks];
    const fiteredTask = tasks.filter((t) => t.id !== id);

    const taskIndex = tasks.findIndex((t) => t.id === id);
    const task = tasks[taskIndex];

    if (task.builtIn) {
      toast.error("You can't delete a Built-in task", {
        position: "bottom-right",
        closeOnClick: true,
        closeButton: true,
      });
    } else {
      setTasks(fiteredTask);

      toast.warn(`${task.tasktitle} deleted successfully!`, {
        position: "bottom-right",
        closeOnClick: true,
        closeButton: true,
      });
    }
  };

  const handleEditTask = (event, id) => {
    const { tasks: newtasks } = getTasks;

    const taskIndex = newtasks.findIndex((t) => t.id === id);
    const task = newtasks[taskIndex];
    task.taskdetail = event.target.value;

    const tasks = [...newtasks];

    tasks[taskIndex] = task;
    setTasks(tasks);
  };

  const handleNewTask = () => {
    const tasks = [...getTasks];
    const task = {
      id: Math.floor(Math.random() * 1000),
      tasktitle: getTask,
    };
    if (task.tasktitle !== "" && task.tasktitle !== " ") {
      tasks.push(task);
      setTasks(tasks);
      setTask("");

      toast.success("Your task added", {
        position: "bottom-right",
        closeOnClick: true,
        closeButton: true,
      });
    } else {
      toast.info("Please fill thw New Task Title", {
        position: "bottom-right",
        closeOnClick: true,
        closeButton: true,
      });
    }
  };

  const settedTask = (event) => {
    setTask(event.target.value);
  };

  return (
    <SimpleContext.Provider
      value={{
        tasks: getTasks,
        task: getTask,
        handleDeleteTask: handleDeleteTask,
        handleEditTask: handleEditTask,
        handleNewTask: handleNewTask,
        settedTask: settedTask,
        //handleBadgeStyle: handleBadgeStyle
      }}
    >
      {props.children}
    </SimpleContext.Provider>
  );
};

export default GlobalState;




//This is Class Type
// class App extends Component {

//     state = {
//         tasks : [
//             {id: 1, builtIn:true, tasktitle:"React(Built-in)",taskdetail:"You must learning react as well as you like, also you should create to-do list "},
//             {id: 2, builtIn:true, tasktitle:"ENG Skill(Built-in)",taskdetail:"Speaking English is very important and you should do it!"}
//         ],
//         task : ""
//      };

//     handleDeleteTask = (id) => {

//         const tasks = [... this.state.tasks];
//         const fiteredTask = tasks.filter(t => t.id !== id);

//         const taskIndex = tasks.findIndex(t => t.id === id);
//         const task = tasks[taskIndex];

//         if(task.builtIn){
//             toast.error("You can't delete a Built-in task",{
//                 position: 'bottom-right',
//                 closeOnClick: true,
//                 closeButton: true,
//             })
//         }else{

//             this.setState({tasks : fiteredTask});

//             toast.warn(`${task.tasktitle} deleted successfully!`,{
//                 position: 'bottom-right',
//                 closeOnClick: true,
//                 closeButton: true,
//             });
//         }
//     };

//     handleEditTask = (event, id) => {

//         const {tasks : newtasks} = this.state;

//         const taskIndex = newtasks.findIndex(t => t.id === id);
//         const task = newtasks[taskIndex];
//         task.taskdetail = event.target.value;

//         const tasks = [... newtasks];

//         tasks[taskIndex] = task;
//         this.setState({tasks})

//     };

//     handleNewTask = () =>{
//         const tasks = [... this.state.tasks];
//         const task = {
//             id: Math.floor(Math.random() * 1000),
//             tasktitle : this.state.task
//         };
//         if(task.tasktitle !== "" && task.tasktitle !== " "){
//             tasks.push(task);
//             this.setState({tasks, task:""});

//             toast.success("Your task added",{
//                 position: 'bottom-right',
//                 closeOnClick: true,
//                 closeButton: true
//             });
//         }else{
//             toast.info("Please fill thw New Task Title",{
//                 position: 'bottom-right',
//                 closeOnClick: true,
//                 closeButton: true
//         });
//         }

//     };

//     settedTask = event => {
//         this.setState({task : event.target.value});
//     };

//     render() {

//         // bad az react Hook check mikonam
//         //const [modalShow, setModalShow] = React.useState(false);

//         return (
//             <SimpleContext.Provider
//                 value={{
//                     state: this.state,
//                     handleDeleteTask: this.handleDeleteTask,
//                     handleEditTask: this.handleEditTask,
//                     handleNewTask: this.handleNewTask,
//                     settedTask: this.settedTask,
//                     handleBadgeStyle: this.handleBadgeStyle
//                 }}>

//             <Container className="p-3">
//                 <Header/>
//                 <NewTask/>
//                 <ToastsShowcase/>
//                 <ToastContainer/>
//             </Container>
//           </SimpleContext.Provider>
//          );
//     }
// }

// export default App;
