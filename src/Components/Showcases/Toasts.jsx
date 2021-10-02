import React, { useState, useContext } from 'react';

import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import {Badge} from 'react-bootstrap';

import Task from './Task';
import SimpleContext from '../Context/SimpleContext';

const ToastsShowcase = () => {
  const [show, toggleShow] = useState(true);

  //if you wanna use 'context' outside of 'context''s function 
  //you should write this lines for define a context which
  //use 'useContext' and the 'useContext' itself is distructured from 'react' on
  //top of code lines in import section; and inside of 'useContext' you define the
  //function(Component) that created by 'creatContext', in this example
  //its 'SimpleContext'
  //And this method use for FUNCTIONS TYPE
  const context = useContext(SimpleContext);
  //And if you wanna use it for CLASS TYPE you write line below:
  //static contextType = SimpleContext;// for use it type: //this.context//
  

  let badgeStyle= "";
  if (context.tasks.length >= 8) badgeStyle = "success";
  if (context.tasks.length <= 7) badgeStyle = "warning";
  if (context.tasks.length <= 3) badgeStyle = "danger";

  return (
    <>
        {!show && <Button onClick={() => toggleShow(true)}>Show Tasks</Button>}
        {/*
      // @ts-ignore */}
        
            <Toast show={show} onClose={() => toggleShow(false)}>
              <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto"><i className="fa fa-tasks" aria-hidden="true"></i> Tasks</strong>
                <small style={{color:'green'}}>You have <Badge pill variant={badgeStyle}>{context.tasks.length}</Badge> Tasks!</small>
              </Toast.Header>
              <Toast.Body>
              <div>

              {/* Class
              {context.state.tasks.map( task => (
              */} 
              {context.tasks.map( task => (
                  <Task 
                      key={task.id} 
                      tasktitle={task.tasktitle} 
                      taskdetail={task.taskdetail}   
                      taskDelete={()=> context.handleDeleteTask(task.id)}
                      taskEdit={event=> context.handleEditTask(event,task.id)}
                  />
                  
              ))}
              </div>
              </Toast.Body>
            </Toast>
         
    </>
  );
};

export default ToastsShowcase;
