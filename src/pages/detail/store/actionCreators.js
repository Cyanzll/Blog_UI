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

const getDetailData = (data) => ({
	type: actionTypes.GET_DETAIL_DATA,
	data: data
});