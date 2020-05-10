import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	title: '',
	content: '',
	authorlist: [],
	reclist: []
});

export default ( state = defaultState, action ) => {
	switch (action.type) {
		case actionTypes.GET_HOME_DATA: 
			return ;
		default:
			return state;
	}
}