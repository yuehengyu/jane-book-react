import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

//immutable对象 让数据变成immutable格式，保证reducer中不会改变state
const defaultState=fromJS({
    focused: false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});

//all header's data
export default (state=defaultState,action)=>{
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused',true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            });
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
};