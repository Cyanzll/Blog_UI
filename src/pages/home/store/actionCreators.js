import * as actionTypes from "./actionTypes";
import axios from 'axios';
import { fromJS } from 'immutable';
//applying thunk

export const getFocusedAction = () => ({
	type: actionTypes.SEARCH_FOCUSED
});
