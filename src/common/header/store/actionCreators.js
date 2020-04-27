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
    return (dispatch) =>{
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(getListAction(data.data))
        }).catch(()=>{console.log("404 NOT FOUND")})
    }
}

//private
const getListAction = (data) => ({
    type: actionTypes.GET_LIST,
    data: fromJS(data)
});
