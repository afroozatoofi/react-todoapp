import React from 'react';

import './Task.css';

const Task = ({tasktitle,taskdetail,taskDelete,taskEdit}) => {
    return ( 
        <div>
            <h6>{`${tasktitle}`}
                <div className="rtl">
                <a style={{cursor:'move'}}>
                    <i className="fa fa-ellipsis-h" aria-hidden="true" title="Re-Order"></i>
                </a>
                <span style={{padding:'4px'}}></span>
                |
                <a onClick={taskDelete}>
                    <i className="fa fa-trash-o" aria-hidden="true" title="Delete"></i>
                </a>
                |
                <a>
                    <i className="fa fa-pencil " aria-hidden="true" title="Edit"></i>
                </a>
                |
                <a>
                    <i className="fa fa-share-alt" aria-hidden="true" title="Share it!"></i>
                </a>
                |
                <a>
                    <i className="fa fa-heart-o" aria-hidden="true" title="Make me as your favariot task"></i>
                </a>
                |
                <a>
                    <i className="fa fa-paint-brush super-colors" aria-hidden="true" title="Change color"></i>
                </a>
                | 
            </div>
            </h6>
            <p>{`${taskdetail}`}</p>
            <textarea id="textarea" type="text" style={{width:'100%',height:'150px', marginBottom:'10px'}} 
                   className="d-none" placeholder={taskdetail} onChange={taskEdit}></textarea>
            <hr/>
        </div>
     );
}
 
export default Task;