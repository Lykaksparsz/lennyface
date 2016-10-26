#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

fs.readFile(path.resolve(__dirname, 'lennyface.txt'), function (err, data) {
	var lennys = data.toString()
	console.log(lennys);
});