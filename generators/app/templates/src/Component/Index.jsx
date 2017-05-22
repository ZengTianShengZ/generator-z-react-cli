import React, {Component,ReactDOM} from 'react';
import PropTypes from 'prop-types';
import template from './temp/template';
/*=============
 群主页
 ==============*/
class Index extends Component {
    constructor() {
        super();
        this.state = {
            "info":{
                "title":"",
                "name":"",
                "author":"",
                "license":"",
                "Github":"",
                "npm":""
            }
        }
    }
    render() {

        let {GetInitData} = this.props;
        let info = this.state.info;
        if(GetInitData.get('initData')!=undefined){
            info = GetInitData.get('initData').data.info;
            // redux 数据 传递测试
            console.log(info)
        }


        return (
            <div id='IndexComp'>
                <div className="comt">
                    <div className="clearfloat">
                        <div className="logo"></div>
                        <h2 className="title">z-react-cli <br/> 脚手架</h2>
                    </div>
                    <div className="git">
                        <span className="author">Author:</span>
                        <span className="author_name">{info.author}</span>
                        <span><a href={info.Github}>Github</a></span>
                        <span><a href={info.npm}>npm</a></span>

                    </div>
                    <div className="icon">
                        <img src="https://img.shields.io/npm/v/generator-z-react-cli.svg?style=flat-square" alt="NPM version" className="badge"/>
                        <img src="https://img.shields.io/david/cnpm/npminstall.svg?style=flat-square" alt="David deps" className="badge"/>
                        <img src="https://img.shields.io/npm/dm/generator-z-react-cli.svg?style=flat-square" alt="npm download" className="badge"/>
                        <img src="https://img.shields.io/npm/l/generator-z-react-cli.svg" alt="License"/>
                    </div>
                </div>

            </div>
        )
    }
}
Index.propTypes = {
  GetInitData: PropTypes.object
};
export default template({
    id: 'index',
    url: '/getData',
    data: {},
    subscribeData: ['GetInitData'],
    component: Index
})
