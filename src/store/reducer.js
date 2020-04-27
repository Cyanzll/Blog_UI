import { combineReducers } from 'redux-immutable'; //数据拆分
import { reducer as HeaderReducer } from '../common/header/store';

const reducer = combineReducers({ //immutable
	header: HeaderReducer,
});

export default reducer;
