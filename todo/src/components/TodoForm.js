import React from 'react';

const TodoForm = (props) => {
    const {input, handleChange, dispatch, changeTask} = props;

    return(
        <>
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch({type: 'ADD_NEW_ITEM', payload: input})
            changeTask('')
        }}>
            <input
                type='text'
                placeholder='~ new item here ~'
                value={input}
                onChange={handleChange}
            />
            <button>SUBMIT</button>
        </form>
        </>
    )
}
export default TodoForm;