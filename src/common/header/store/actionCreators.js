import * as actionTypes from "./actionTypes";
import axios from 'axios';
import { fromJS } from 'immutable';
//applying thunk

export const getFocusedAction = () => ({
	type: actionTypes.SEARCH_FOCUSED
});

export const getBlurAction = () => ({
	type: actionTypes.SEARCH_BLUR
});

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res)=>{
			const data = res.data;
			dispatch(getListAction(data.data))
		}).catch((ex)=>{console.log("404 NOT FOUND")})	
	}	
}

export const getEnterAction = () => ({
    type:actionTypes.ENTER
});

export const getLeaveAction = () => ({
    type:actionTypes.LEAVE
});

export const getSwitchAction = (deg) => ({
	type: actionTypes.SWITCH,
	deg: deg
});

//private
const getListAction = (data) => ({ //data是收到的数组
    type: actionTypes.GET_LIST,
		data: fromJS(data),
		totalPage: Math.ceil(data.length/10)
});
