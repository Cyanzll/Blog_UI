import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [], //turn to immutable
	currentPage: 1,
	totalPage: 0,
	degree: 0
});

export default ( state = defaultState, action ) => {

	switch (action.type) {
		case actionTypes.SEARCH_FOCUSED:
			return state.set('focused', true);

		case actionTypes.SEARCH_BLUR:
			return state.set('focused', false);

		case actionTypes.GET_LIST:
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
			
		case actionTypes.ENTER:
			return state.set("mouseIn", true);

		case actionTypes.LEAVE:
			return state.set("mouseIn", false);

		case actionTypes.SWITCH: {
			const page = state.get("currentPage") === state.get("totalPage") ? 1 : state.get("currentPage") + 1; //循环改变当前页码
			return state.set("currentPage", page).set("degree", action.deg);
		}

		default:
			return state;
	}
	
}