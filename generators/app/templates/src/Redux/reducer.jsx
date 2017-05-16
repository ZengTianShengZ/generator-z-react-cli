import Immutable from 'immutable';
import {ComStr} from '../Config/ComStr.jsx';
/*=================
 reducer.jsx
 接收Action 并作出处理
 ==================*/
export const GetInitData = (state = Immutable.fromJS({data:{}}), action = {}) => {
    switch (action.type) {
        case 'DispatchInitData':
            return state.set('initData',action.data);
        default:
            return state;
    }
};