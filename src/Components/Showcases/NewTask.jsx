import React,{useContext, useRef, useEffect} from 'react';

import Button from 'react-bootstrap/Button';
import SimpleContext from '../Context/SimpleContext';

const TaskForm = () => {

    const context = useContext(SimpleContext);

    //these code use for focus on a input
    const focusInput = useRef(null);
    useEffect(()=>{
        focusInput.current.focus();
    })


    return ( 

        //this is the old way to use 'SimpleContext'
        // <SimpleContext.Consumer>
        //     {context => ( 
        //          you should write everything here
        //      )}
        // </SimpleContext.Consumer>        
                <form className="from-inline justify-content-center" 
                    onSubmit={event => event.preventDefault()}>
                    <input
                        ref={focusInput} 
                        id="inp" 
                        type="text" 
                        placeholder="New Task Title" 
                        className="rounded mr-2" 
                        style={{width:'250px', height:'38px', marginBottom:'2px'}}
                        onChange={context.settedTask}
                        value={context.task}
                    />
                    <Button type="submit" 
                            onClick={context.handleNewTask} 
                            variant="success" 
                            className="mr-1" 
                            style={{marginTop:'-6px'}}>
                                <i className="fa fa-check" aria-hidden="true"></i>
                    </Button>
                    <Button onClick={()=> document.getElementById('inp').value = ''} 
                            variant="warning" 
                            className="mr-1" 
                            style={{marginTop:'-6px'}} >
                                <i className="fa fa-refresh" aria-hidden="true"></i>
                    </Button>
                </form>
               
     );
}
 
export default TaskForm;