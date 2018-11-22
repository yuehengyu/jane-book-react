import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

//immutable对象 让数据变成immutable格式，保证reducer中不会改变state
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
    });
};

const changeArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    });
};

//all header's data
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case actionTypes.ADD_ARTICLE_LIST:
            return changeArticleList(state, action);
        case actionTypes.TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
};