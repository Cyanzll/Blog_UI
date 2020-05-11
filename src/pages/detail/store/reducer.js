import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	title: '',	//文章标题 
	content: '', 	//文章内容
	author: '',	//作者
	avatar: '', //头像
	date: '',	 //提交日期
	time: '',  //提交时间
	authorlist: [], //该作者的其他文章列表
	reclist: [], //推荐阅读列表
	scroll: false,
	inDetail: false
});

const getDetailData = (state, action) => {
	return state.merge({
		title: fromJS(action.data.title),	//文章标题 
		content: fromJS(action.data.content), 	//文章内容
		author: fromJS(action.data.author),	//作者
		avatar: fromJS(action.data.avatar), //头像
		date: fromJS(action.data.date),	 //提交日期
		time: fromJS(action.data.time),  //提交时间
		authorlist: fromJS(action.data.authorlist), //该作者的其他文章列表
		reclist: fromJS(action.data.reclist) //推荐阅读列表
	});
}

export default ( state = defaultState, action ) => {
	switch (action.type) {
		case actionTypes.GET_DETAIL_DATA: 
			return getDetailData(state, action);
		case actionTypes.SCROLL_Y:
			return state.set("scroll", action.data);
		case actionTypes.GET_IN_DETAIL:
			return state.set("inDetail", action.data);
		default:
			return state;
	}
}