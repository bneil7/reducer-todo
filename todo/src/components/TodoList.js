import React from 'react';
import Todo from './Todo';

function TodoList(props){
    return(
        <ul>
            {props.list.map(item => (
                <Todo 
                    id={item.id}
                    key={item.id + 1} 
                    task={item.item} 
                    completed={item.completed} 
                    checkOffTask={props.completeTask}
                />
            ))}
        </ul>
    )
}
export default TodoList;