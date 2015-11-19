// 定义目标文件、源入口/路径
var fs =  require("fs");
var dist = __dirname + '/../public/css/jiwei.css';
var __dirname = '.';
var main = __dirname + '/source/src/common.styl';
var paths = [
	__dirname, __dirname + '/source/src'
];

var stylus = require('stylus'),
	str = fs.readFileSync(main, 'utf8');

exports.run = function() {
	// 设置入口文件、源路径
	// 编译stylus文件
	stylus(str)
		.set('filename', main)
		.set('paths', paths)
		.render(function(err, css) {
			if (err) throw err;
			fs.writeFile(dist, css, function(err) {
				if (err)
					console.log("stylus编译失败！ 错误信息：" + err);
				else
					console.log("stylus编译成功！");
			});
		});
};
