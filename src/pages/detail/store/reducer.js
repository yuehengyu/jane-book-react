import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

//immutable对象 让数据变成immutable格式，保证reducer中不会改变state
const defaultState = fromJS({
    title:'',
    content:''
});


// detail's data
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL:
            return state.merge({
                title:action.title,
                content:action.content
            });
        default:
            return state;
    }
};