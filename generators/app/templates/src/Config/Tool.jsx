import fetch from 'isomorphic-fetch'
/*=================
  工具方法
 ==================*/
export const Tool = {};
/**
 * 拼接get请求
 * @param data
 * @returns {string}
 */
Tool.paramType = data => {
    let paramArr = [];
    let paramStr = '';
    for (let attr in data) {
        paramArr.push(attr + '=' + data[attr]);
    }
    paramStr = paramArr.join('&');
    paramStr = '?' + paramStr;
    return paramStr
};
/**
 * 网络数据请求工具方法 : fetch  POST 请求
 * @param dispatch  redux派发action
 * @param path      路径
 * @param data      post参数
 * @param successFun  请求成功回调
 */
Tool.fetchData_P =(path,data,successFun) => {
    fetch(path,{
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        })
    }).then(response => {
        if(response.status >= 400){
            throw new Error('Bad response from server')
        }
        return response.json();
    }).then(successFun).catch(error => {
        console.log('  .........   fetchData_P error failed', error)
    })
};
