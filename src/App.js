import React, { Component } from 'react';
import { connect } from 'react-redux'

import AddTodo from './pages/AddTodo'
import TodoList from './pages/TodoList'
import Footer from './pages/Footer'
import { toggleTodo, initTodos, dispatchInitTodos } from './store/actions'

export class App extends Component {

    constructor (props) {
        super(props)
        this.onTodoClick = this.onTodoClick.bind(this)
    }

    componentDidMount () {
        const { dispatch } = this.props
        dispatch(dispatchInitTodos())
    }

    onTodoClick (index) {
        const { dispatch } = this.props
        dispatch(toggleTodo(index))
    }

    render() {
        const { todos, loading } = this.props
        return (
            <div>
                <AddTodo />
                {loading && (<div className="tips">loading....</div>)}
                <TodoList loading={loading} todos={todos} onTodoClick={this.onTodoClick}/>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.filter((todo) => {
            if (state.visibilityFilter === 'SHOW_ACTIVE') {
                return !todo.completed
            } else if (state.visibilityFilter === 'SHOW_COMPLETED') {
                return todo.completed
            } else {
                // SHOW_ALL
                return true
            }
        }),
        loading: state.loading,
    }
}

export default connect(mapStateToProps)(App)