import fetch from 'isomorphic-fetch'
import {Tool} from '../Config/Tool.jsx'

/*=================
 action.jsx
 派发 action
 ==================*/

/**
 * 派发初始化数据
 * @param path
 * @param json
 * @returns {{type: string, path: *, data: *}}
 */
const dispatchInitData = (path, json) => {
    return {
        type: 'DispatchInitData',
        path: path,
        data: json
    }
};
/**
 * 初始化数据
 * @param path
 * @param data
 * @returns {Function}
 */
export const fetchInitData = (path, data) => {
    return dispatch => {
        Tool.fetchData_P(path, data, (responseData)=> {

            return dispatch(dispatchInitData(path, responseData));
        })
    };
};
