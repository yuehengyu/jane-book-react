import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

//immutable对象 让数据变成immutable格式，保证reducer中不会改变state
const defaultState = fromJS({
    login:false
});




// login's data
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN:
            return state.set('login',action.value);
        case actionTypes.LOGOUT:
            return state.set('login',action.value);
        default:
            return state;
    }
};