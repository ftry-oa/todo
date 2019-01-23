import React from 'react';
import { connect } from 'react-redux'
import { TabBar } from 'antd-mobile'
import { setVisibilityFilter } from '../store/actions'
const SHOW_ALL = 'SHOW_ALL'
const SHOW_ACTIVE = 'SHOW_ACTIVE'
const SHOW_COMPLETED = 'SHOW_COMPLETED'

const Footer = ({ dispatch, visibilityFilter }) => {
    const allIcon = (<i className="footer-icon iconfont icon-quanbu"></i>)
    const activeIcon = (<i className="footer-icon iconfont icon-weiwancheng-tianchong"></i>)
    const completedIcon = (<i className="footer-icon iconfont icon-yiwancheng"></i>)
    return (
    <div className="footer-box">
        <TabBar>
            <TabBar.Item 
                selected={visibilityFilter === SHOW_ALL}
                title="全部"
                key={SHOW_ALL}
                onPress={() => {
                    dispatch(setVisibilityFilter(SHOW_ALL))
                }}
                icon={allIcon}
                selectedIcon={allIcon}></TabBar.Item>
            <TabBar.Item 
                selected={visibilityFilter === SHOW_ACTIVE}
                title="未完成"
                onPress={() => {
                    dispatch(setVisibilityFilter(SHOW_ACTIVE))
                }}
                key={SHOW_ACTIVE}
                icon={activeIcon}
                selectedIcon={activeIcon}></TabBar.Item>
            <TabBar.Item 
                selected={visibilityFilter === SHOW_COMPLETED}
                title="已完成"
                onPress={() => {
                    dispatch(setVisibilityFilter(SHOW_COMPLETED))
                }}
                key={SHOW_COMPLETED}
                icon={completedIcon}
                selectedIcon={completedIcon}></TabBar.Item>
        </TabBar>
    </div>
)}
const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter,
    }
}
export default connect(mapStateToProps)(Footer)