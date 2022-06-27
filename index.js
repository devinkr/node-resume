#! /usr/bin/env node

const fs = require('fs');
var colors = require('colors');

fs.readFile(__dirname + '/info.json', 'utf8', function (err, data) {
	if (err) {
		console.log(err.red);
	} else {
		const resume = JSON.parse(data);
		for (const prop in resume) {
			if (Array.isArray(resume[prop])) {
				console.log(`${prop.underline.green}:`);
				resume[prop].forEach((element) => {
					console.log(`\t${element.brightYellow}`);
				});
			} else {
				console.log(`${prop.underline.green}: ${resume[prop].cyan}`);
			}
		}
		return data;
	}
});
