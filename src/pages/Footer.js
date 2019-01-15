import React from 'react';
import { connect } from 'react-redux'

import Link from './Link'
import { setVisibilityFilter } from '../store/actions'

const Footer = ({ dispatch, visibilityFilter }) => (
    <p>
        Show:
        <Link active={visibilityFilter === 'SHOW_ALL'}
            onClick={() => {
                dispatch(setVisibilityFilter('SHOW_ALL'))
            }}>ALL</Link>
        &nbsp;&nbsp;
        <Link active={visibilityFilter === 'SHOW_ACTIVE'}
            onClick={() => {
                dispatch(setVisibilityFilter('SHOW_ACTIVE'))
            }}>Active</Link>
        &nbsp;&nbsp;
        <Link active={visibilityFilter === 'SHOW_COMPLETED'}
            onClick={() => {
                dispatch(setVisibilityFilter('SHOW_COMPLETED'))
            }}>Completed</Link>
    </p>
)
const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter,
    }
}
export default connect(mapStateToProps)(Footer)