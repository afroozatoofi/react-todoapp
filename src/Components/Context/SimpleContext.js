import React, {createContext} from 'react';

const SimpleContext = createContext(
    {
        //Class
        //state: {},
        //Function Hooks
        tasks:[],
        task:"",
        //****** */
        handleDeleteTask: () => {},
        handleEditTask: () => {},
        handleNewTask: () => {},
        settedTask: () => {}
    }
)
export default SimpleContext;