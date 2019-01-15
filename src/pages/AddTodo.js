import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../store/actions'

const AddTodo = ({ dispatch }) => {
    let input = null
    return (
        <div>
            <input type="text"
                ref={node => {
                    input = node
                }} />
            <button type="button"
                onClick={() => {
                    dispatch(addTodo(input && input.value))
                }}
            >Add</button>
        </div>
    )
}

export default connect()(AddTodo)