import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { App } from '../src/App'

configure({ adapter: new Adapter() })

function setup () {
    const props = {
        todos: [],
        loading: false,
        dispatch: jest.fn(),
    }

    const enzymeWrapper = shallow(<App {...props} />)

    return {
        props,
        enzymeWrapper,
    }
}

describe('test components', () => {
    it('test App', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('AddTodo')).toEqual({})
        expect(enzymeWrapper.find('TodoList')).toEqual({})
        expect(enzymeWrapper.find('Footer')).toEqual({})
    })
})