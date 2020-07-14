import React from 'react';

const Todo = (props) => {
    const {id, task, completed, checkOffTask} = props;

    return(
        <li onClick={() => (checkOffTask(id))} className={`task${completed}`}>
            {task}
        </li>
    )
}
export default Todo;