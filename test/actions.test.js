
import { addTodo,
         toggleTodo,
         setVisibilityFilter,
         setLoading,
         initTodos,
 } from '../src/store/actions';

describe('test action', () => {
    it('test addTodo', () => {
        const text = 'item1'
        expect(addTodo(text)).toEqual({
            type: 'ADD_TODO',
            text,
        })
    })
    it('test toggleTodo', () => {
        const index = 1
        expect(toggleTodo(index))
        .toEqual({
            type: 'TOGGLE_TODO',
            index,
        })
    })
    it('test setVisibilityFilter', () => {
        const filter = 'SHOW_ALL'
        expect(setVisibilityFilter(filter))
        .toEqual({
            type: 'SET_VISIBILITY_FILTER',
            filter,
        })
    })
    it('test setLoading', () => {
        const loading = true
        expect(setLoading(loading))
        .toEqual({
            type: 'SET_LOADING',
            loading,
        })
    })
    it('test initTodos', () => {
        const list = [{
            text: '01',
            completed: true,
        }]
        expect(initTodos(list))
        .toEqual({
            type: 'INIT_TODOS',
            list,
        })
    })
})