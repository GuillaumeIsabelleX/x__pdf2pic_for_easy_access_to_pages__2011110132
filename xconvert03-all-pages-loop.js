import { fromPath } from "pdf2pic";
 
const options = {
	  density: 100,
	  saveFilename: "Boden-Edmonds-2009",
	  savePath: "./images",
	  format: "png",
	  width: 1200,
	  height: 1400
};
const storeAsImage = fromPath("./sample.pdf", options);
const pageToConvertAsImage = 2;
var totalNumPage = 27;

//@STCgoal all pages loop 
//@q Can we guess them ??
for (let index = 1; index < totalNumPage; index++) {
	
	storeAsImage(index).then((resolve) => {
		  console.log(`Page ${index}/ ${pageToConvertAsImage} is now converted as image`);
		 
		  return resolve;
	});
	
	
	
}
 
