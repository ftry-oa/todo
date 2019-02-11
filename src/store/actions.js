// actions.js
import { getTodos } from '../services/services.js'
// 添加待办事项
export function addTodo(text) {
  return { type: 'ADD_TODO', text }
}
// 对index对应待办事项的状态进行取反操作
export function toggleTodo(index) {
  return { type: 'TOGGLE_TODO', index }
}
// 更改过滤条件
export function setVisibilityFilter(filter) {
  return { type: 'SET_VISIBILITY_FILTER', filter }
}

export function setLoading(loading) {
  return {
    type: 'SET_LOADING',
    loading,
  }
}

// 初始化todos
export function initTodos(list) {
  return {
    type: 'INIT_TODOS',
    list,
  }
}

export function dispatchInitTodos() {
  return (dispatch) => {
    dispatch(setLoading(true))
    return getTodos().then((data) => {
      dispatch(initTodos(data.body.todos))
      dispatch(setLoading(false))
    }, (err) => {
      console.log('@@@fail', err)
      dispatch(setLoading(false))
    })
  }
}