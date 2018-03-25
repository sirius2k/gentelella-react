import { TOP_NAV_TOGGLE } from '../actions/index';
import { combineReducers } from 'redux';

const toggleState = {
    value: true
}

const toggle = (state, action) => {
    switch(action.type) {
        case TOP_NAV_TOGGLE: {
            return Object.assign({}, state, {
                value: state.value
            });
        }
        default:
            return state;
    }
};

export default toggleState;