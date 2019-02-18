
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import { dispatchInitTodos } from '../src/store/actions'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('async action test', () => {
    it('test getTodos', () => {

        nock('http://localhost', {
            allowUnmocked: true,
        })
        .get('/getTodos')
        .reply(200, {
            list: [
                {
                    text: 'todo-item',
                    completed: true,
                },
            ]
        })

        const actionTypes = [
            {
                type: 'SET_LOADING',
                loading: true,
            },
            {
                type: 'INIT_TODOS',
                list: [
                    {
                        text: 'todo-item',
                        completed: true,
                    },
                ],
            },
            {
                type: 'SET_LOADING',
                loading: false,
            }
        ]

        const store = mockStore({
            todos: [],
        })

        return store.dispatch(dispatchInitTodos()).then(() => {
            const actionsResult = store.getActions()
            expect(actionsResult).toEqual(actionTypes)
        })
    })
})