// var ObjectID = require('mongodb').ObjectID;

var fs = require('fs');

const ROOT_FOLDER = './Animals/';


fs.readdir(ROOT_FOLDER, (err, files) => {
	var fileNames = [];
	files.forEach(file => {
		file = file.split('.')[0];
		if(!fileNames.includes(file)){
			fileNames.push(file);
		}
	});
	console.log(fileNames)
	
});