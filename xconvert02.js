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
 
storeAsImage(pageToConvertAsImage).then((resolve) => {
	  console.log(`Page ${pageToConvertAsImage} is now converted as image`);
	 
	  return resolve;
});
 
