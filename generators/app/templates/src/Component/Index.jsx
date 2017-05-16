import React, {Component, PropTypes,ReactDOM} from 'react';
import template from './temp/template'
/*=============
     群主页
==============*/
class Index extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        let {GetInitData} = this.props;
        return (
            <div id='IndexComp'>
                Hello Word !!!!
                {GetInitData}
            </div>
        )
    }
}
export default template({
    id: 'index',
    url: 'http://ditu.amap.com/service/regeo?longitude=121.04925573429551&latitude=31.315590522490712',
    data: {},
    subscribeData: ['GetInitData'],
    component: Index
})
