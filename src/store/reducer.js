import { combineReducers } from 'redux'; //数据拆分
import { reducer as HeaderReducer } from '../common/header/store';

const reducer = combineReducers({
	header: HeaderReducer,
});

export default reducer;
