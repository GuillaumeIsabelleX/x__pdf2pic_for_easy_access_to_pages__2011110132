var PDFParser = require('pdf2json');
var pdfParser = new PDFParser();

pdfParser.on('pdfParser_dataReady', function(data) {   
    console.log(data.formImage.Pages.length);
});



pdfParser.loadPDF('sample.pdf');