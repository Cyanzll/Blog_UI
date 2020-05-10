import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	writerList: [],
	articleListPage: 1,
	scroll: false
});

const getHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.data.topicList),
		articleList: fromJS(action.data.articleList),
		writerList: fromJS(action.data.writerList)
	});
}

const getExtraData = (state, action) => {
	return state.merge({
		articleList: state.get("articleList").concat(fromJS(action.data)),
		articleListPage: state.get("articleListPage") + 1
	});
}

export default ( state = defaultState, action ) => {
	switch (action.type) {
		case actionTypes.GET_HOME_DATA: 
			return getHomeData(state, action);
		case actionTypes.GET_EXTRA_DATA:
			return getExtraData(state, action);
		case actionTypes.TOGGLE_SCROLL:
			return state.set("scroll", action.scroll);
		default:
			return state;
	}
}