import * as actionTypes from "./actionTypes";
import axios from 'axios';
import { fromJS } from 'immutable';
//applying thunk

export const getDetailDataAction = (id) => {
	return (dispatch) => {
		axios.get('api/detail.json').then((res)=>{
			const data = res.data;
			dispatch(getDetailData(data.data))
		});
	}
};

export const getInDetailAction = (istrue) => ({
	type: actionTypes.GET_IN_DETAIL,
	data: istrue
});

export const getScrollAction = (data) => ({
	type: actionTypes.SCROLL_Y,
	data: data
});

const getDetailData = (data) => ({
	type: actionTypes.GET_DETAIL_DATA,
	data: data
});