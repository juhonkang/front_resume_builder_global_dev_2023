// document.getElementById('savePdf').addEventListener('click', function() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
//     const element = document.querySelector('.preview-container');

//     html2canvas(element).then(canvas => {
//         const imgData = canvas.toDataURL('image/png');
//         const imgProps = doc.getImageProperties(imgData);
//         const pdfWidth = doc.internal.pageSize.getWidth();
//         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//         doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//         doc.save('download.pdf');
//     });
// });



function printReceipt() {
    var w = window.open();
  
    w.document.write('<html><head><title></title>');
    w.document.write('<link rel="stylesheet" type="text/css" href="assets/css/styles.css" media="all">');
    w.document.write('<link rel="stylesheet" type="text/css" href="assets/css/resumes.css" media="all" />');

    w.document.write('<link rel="stylesheet" type="text/css" href="dep/normalize.css/normalize.css" media="all" />');
    w.document.write('<link rel="stylesheet" type="text/css" href="dep/Font-Awesome/css/font-awesome.css" media="all" />');
    w.document.write('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" media="all"/>');
    // w.document.write('<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Source+Code+Pro" media="all" />');
    // w.document.write('<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" media="all" />');
    w.document.write('</head><body >');
    w.document.write(document.querySelector('.preview-container').innerHTML);
    w.document.write('<script type="text/javascript">addEventListener("load", () => { print(); close(); })</script></body></html>');
  
    w.document.close();
    w.focus();
  }
  

  document.getElementById('savePdf').addEventListener('click', printReceipt);