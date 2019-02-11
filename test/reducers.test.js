import {
    visibilityFilter,
    todos,
    loading,
} from '../src/store/reducers'

describe('reducers test', () => {
    it('test visibilityFilter', () => {
        // 初始值
        expect(visibilityFilter(undefined, {})).toEqual('SHOW_ALL')
        // 有action值
        expect(visibilityFilter(undefined, {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_ACTIVE'
        })).toEqual('SHOW_ACTIVE')
        expect(visibilityFilter(undefined, {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_COMPLETED'
        })).toEqual('SHOW_COMPLETED')
    })

    it('test todos', () => {
        // 初始值
        expect(todos(undefined, {})).toEqual([])
        // ADD_TODO
        const text = 'hello test reducers'
        expect(todos(undefined, {
            type: 'ADD_TODO',
            text,
        })).toEqual([{
            text,
            completed: false,
        }])
        // TOGGLE_TODO
        const toggleText = 'haha'
        expect(todos([{
            text: toggleText,
            completed: false,
        }], {
            type: 'TOGGLE_TODO',
            index: 0,
        })).toEqual([{
            text: toggleText,
            completed: true,
        }])
        // INIT_TODOS
        const list = [{
            text: 'item1',
            completed: false,
        }, {
            text: 'item2',
            completed: true,
        }]
        expect(todos(undefined, {
            type: 'INIT_TODOS',
            list,
        })).toEqual(list)
    })

    it('test loading', () => {
        expect(loading(undefined, {})).toEqual(false)
        expect(loading(undefined, {
            type:'SET_LOADING',
            loading: true,
        })).toEqual(true)
    })
})