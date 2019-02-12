
import { shallow } from 'enzyme'
import { App } from '../src/App'

function setup () {
    const props = {
        todos: [],
        loading: false,
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
        // expect(enzymeWrapper.find('AddTodo')).toBe(true) 
    })
})