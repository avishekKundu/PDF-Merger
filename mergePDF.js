const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

// const pdfMerge = async (p1,p2) => {
//   // for (let i = 0; i < p1.length(); i++) {
//   //   await merger.add(p1[i]);  //merge all pages. parameter is the path to file and filename.
//   // }
  
//   await merger.add(p1); 
//   await merger.add(p2); 
//   // await merger.add(p3); 
//   // await merger.add('final_Java_notes.pdf');  //merge all pages. parameter is the path to file and filename.
//   // await merger.add('Java,Python,C, Oops Notes.pdf'); 
//   // await merger.add('Android_CompleteNotes.pdf'); 
//   // await merger.add('Java,Python,C, Oops Notes.pdf', 5); // merge only page 2
//   // await merger.add('Android_CompleteNotes.pdf', [3, 7]); // merge the pages 1 and 3
//   let d = new Date().getTime();
//   await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
//   return d;
//   // Export the merged PDF as a nodejs Buffer
//   // const mergedPdfBuffer = await merger.saveAsBuffer();
//   // fs.writeSync('merged.pdf', mergedPdfBuffer);
// }
const pdfMerge = async (files) => {
  // for (let i = 0; i < p1.length(); i++) {
  //   await merger.add(p1[i]);  //merge all pages. parameter is the path to file and filename.
  // }
  
   
  for(let i=0; i<files.length; i++) {
    await merger.add(files[i]);
    console.log(files[i])
  }
   
  // await merger.add(p3); 
  // await merger.add('final_Java_notes.pdf');  //merge all pages. parameter is the path to file and filename.
  // await merger.add('Java,Python,C, Oops Notes.pdf'); 
  // await merger.add('Android_CompleteNotes.pdf'); 
  // await merger.add('Java,Python,C, Oops Notes.pdf', 5); // merge only page 2
  // await merger.add('Android_CompleteNotes.pdf', [3, 7]); // merge the pages 1 and 3
  let d = new Date().getTime();
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d;
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = { pdfMerge }

/*
(async () => {
  await merger.add('pdf1.pdf');  //merge all pages. parameter is the path to file and filename.
  await merger.add('pdf2.pdf', 2); // merge only page 2
  await merger.add('pdf2.pdf', [1, 3]); // merge the pages 1 and 3
  await merger.add('pdf2.pdf', '4, 7, 8'); // merge the pages 4, 7 and 8
  await merger.add('pdf3.pdf', '3 to 5'); //merge pages 3 to 5 (3,4,5)
  await merger.add('pdf3.pdf', '3-5'); //merge pages 3 to 5 (3,4,5)

  await merger.save('merged.pdf'); //save under given name and reset the internal document
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
})();
*/
