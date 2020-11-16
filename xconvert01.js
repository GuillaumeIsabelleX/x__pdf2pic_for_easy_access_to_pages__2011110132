// import fromPath from 'gix-pdf2img';
import { Pdf2Img } from "gix-pdf2img";
 
const options = {
  density: 100,
  saveFilename: "Boden-Edmonds-2009-",
  savePath: "./images",
  format: "jpg",
  width: 1200,
  height: 1200
};
const storeAsImage = fromPath("./sample.pdf", options);
const pageToConvertAsImage = 1;
 
storeAsImage(pageToConvertAsImage).then((resolve) => {
  console.log("Page 1 is now converted as image");
 
  return resolve;
});
 