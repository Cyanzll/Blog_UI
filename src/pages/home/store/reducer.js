import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [ {
		id: 1,
		title: "社会迷惑",
		imgUrl: ""
	},{
		id: 2,
		title: "人类迷惑",
		imgUrl: ""
	} ]
});

export default ( state = defaultState, action ) => {
	switch (action.type) {
		default:
			return state;
	}
}