import { fromPath } from "pdf2pic";
import fs from 'fs';

var totalNumPage = 27;
const fnamebase = "Boden-Edmonds-2009-";

const outdir = "./images";

//------------------------------------------
const padChar = '0';
const padTotal = 5;

const outFormat = "png";
const outResY = 1400;
const outResX = 1200;
const outDensity = 100;

const pageToConvertAsImage = 2;

//@STCgoal all pages loop 
//@q Can we guess them ??

for (let index = 1; index < totalNumPage; index++) {
	var pad = "" + index;
	var iLenght = pad.length;
	console.log(`pad.lengh: ${iLenght}`);
	var paddedNum = pad.padStart(padTotal, padChar);
	console.log(`paddedNum: ${paddedNum}`);
	const options = {
		density: outDensity,
		saveFilename: fnamebase + paddedNum,
		savePath: outdir,
		format: outFormat,
		width: outResX,
		height: outResY
	};

	const storeAsImage = fromPath("./sample.pdf", options);
	
	var corePath = outdir + "/"+ fnamebase + paddedNum + "." + outFormat;

	storeAsImage(paddedNum).then((resolve) => {
		console.log(`Page ${index}/ ${pageToConvertAsImage} is now converted as image`);
		console.log(resolve);
		var corePath2 = 
			outdir + "/" + fnamebase + 

		//use the fs object's rename method to re-name the file
		fs.rename(resolve.path, corePath, function (err) {
			if (err) { console.log(err); return; }

			console.log('The file has been re-named to: ' + corePath);
		});

		return resolve;
	});



}

