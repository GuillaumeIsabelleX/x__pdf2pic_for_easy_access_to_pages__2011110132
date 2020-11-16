import { fromPath } from "pdf2pic";
import fs from 'fs';

import PDFParser from 'pdf2json';
var pdfParser = new PDFParser();



const pdfFilename = "./sample.pdf";

const fnamebase = "Boden-Edmonds-2009-";

const pageOffset = 0; // is there is offsets so we have the right ref

const outdir = "./images";



pdfParser.on('pdfParser_dataReady', function (data) {
	var pdfNumberOfPages = data.formImage.Pages.length;
	console.log(`pdf has ${pdfNumberOfPages} pages`);



	
	
	var totalNumPage = pdfNumberOfPages + pageOffset;
	
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
		
		const storeAsImage = fromPath(pdfFilename, options);
		
		var corePath = outdir + "/" + fnamebase + paddedNum + "." + outFormat;
		
		storeAsImage(paddedNum).then((resolve) => {
			console.log(`Page ${index}/ ${pageToConvertAsImage} is now converted as image`);
			console.log(resolve);
			var pad2 = "" + index;
			var paddedNum2 = pad2.padStart(padTotal, padChar);
			console.log(`paddedNum: ${paddedNum2}`);
			var corePath2 =
			outdir + "/" + fnamebase + paddedNum2 + "." + outFormat;
			
			//use the fs object's rename method to re-name the file
			fs.rename(resolve.path, corePath2, function (err) {
				if (err) { console.log(err); return; }
				
				console.log('The file has been re-named to: ' + corePath2);
			});
			
			return resolve;
		});
		
		
		
	}
	
	
	
});

pdfParser.loadPDF(pdfFilename);