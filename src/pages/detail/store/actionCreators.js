import * as actionTypes from "./actionTypes";
import axios from 'axios';
import { fromJS } from 'immutable';
//applying thunk

export const getHomeDataAction = () => {
	return (dispatch) => {
		axios.get('api/home.json').then((res)=>{
			const data = res.data;
			dispatch(getHomeData(data.data))
		})
	}
};

export const getLoadMoreAction = ( Page ) => {
	return (dispatch) => {
		axios.get('api/homeList.json?page=' + Page).then((res)=>{
			const data = res.data;
			dispatch(getExtraData(data.data))
		})
	}
}

export const toggleScrollAction = (scroll) => ({
	type: actionTypes.TOGGLE_SCROLL,
	scroll: scroll
});


const getExtraData = (data) => ({
	type: actionTypes.GET_EXTRA_DATA,
	data: data
});

const getHomeData = (data) => ({
	type: actionTypes.GET_HOME_DATA,
	data: data
});
