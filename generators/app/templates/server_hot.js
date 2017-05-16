var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.hot');
var dataJson = require('./dataJson.json');
var app = express();
var compiler = webpack(config);
var bodyParser = require('body-parser');
var bs = require('browser-sync').create();
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser());

app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
	colors: true
	}
}));

app.use(require('webpack-hot-middleware')(compiler));

/**获取初始数据
 * post： 请求
 * url： http://127.0.0.1:8088/getData
 */
app.post('/getData',bodyParser.json() ,function(req,res){
	console.log(req.body);
	var resData = {
		err:0,
		data:dataJson
	};
	res.end(JSON.stringify(resData));
});
/**
* 将其他路由，全部返回index.html
*/
app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});
app.listen(8088, function() {
	console.log('正常打开8088端口');
	bs.init({
		open: false,
		ui: false,
		notify: false,
		proxy: 'localhost:8088',
		files: ['./src/index.html'],
		port: 8088
	});
});
