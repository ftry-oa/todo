import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import { Button, InputItem, Toast } from 'antd-mobile'
import { addTodo } from '../store/actions'

class AddTodo extends Component {
    
    state = {
        showButton: false,
    }

    handleClick = () => {
        const { form, dispatch } = this.props
        form.validateFields((error, value) => {
            if (error) {
                Toast.fail(error || '校验不通过~~')
                return
            }
            const val = value.todoName
            if (!val) {
                Toast.fail('不能为空~~')
                return
            }
            dispatch(addTodo(val))
            form.setFieldsValue({
                todoName: '',
            })
          });
    }

    render () {
        const { getFieldProps } = this.props.form;
        return (
            <div className="add-todo-box">
                <InputItem 
                    placeholder="请输入待办事项"
                    {...getFieldProps('todoName')}
                />
                <Button type="primary" onClick={this.handleClick}>添加</Button>
            </div>
        )
    }
}

export default connect()(createForm()(AddTodo))