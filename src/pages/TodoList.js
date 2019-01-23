import React from 'react'
import { List } from 'antd-mobile'
import './style.less'

import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, loading }) => (
    <div>
        {!loading && (<List className="todo-list">
            {todos.map((todo, index) => (
                <Todo key={index} {...todo} onClick={() => { onTodoClick(index) }} />
            ))}
        </List>)}
        {(!loading && todos.length <= 0) && (
            <div className="tips">暂无数据~~</div>
        )}
    </div>
)

export default TodoList