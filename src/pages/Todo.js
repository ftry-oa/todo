import React from 'react'
import { List } from 'antd-mobile'

const Item = List.Item

const Todo = ({ onClick, completed, text }) => {
    const className = completed ? 'completed' : ''
    return (
        <Item
            onClick={onClick}
            className={className}
            extra={(<i className="status iconfont icon-chenggong"></i>)}
        >
            {text}
        </Item>
    )
}

export default Todo