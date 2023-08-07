
// // Function to print the content of the div with class "preview-container"
// function printPDF() {
//     // Get the content of the div with class "preview-container"
//     const previewContainer = document.querySelector('.preview-container');
    
//     // Create a new window to print
//     const printWindow = window.open('', '_blank');
    
//     // Write the CSS links, content of the preview-container div, and styles for A4 size to the new window
//     printWindow.document.write('<html><head><title>Print PDF</title>');
    
//     // Including linked stylesheets
//     printWindow.document.write('<link rel="stylesheet" href="assets/css/styles.css" type="text/css" media="print">'); 
//     printWindow.document.write('<link rel="stylesheet" type="text/css" href="assets/css/resumes.css" media="print">');
    
//     // Additional styles to make the content fit into an A4 page size
//     printWindow.document.write('<style>@page { size: A4; margin: 0; } body { margin: 0; } .preview-container { width: 100%; box-sizing: border-box; page-break-before: always; }</style>');
    
//     printWindow.document.write('</head><body>');
//     printWindow.document.write(previewContainer.innerHTML);
//     printWindow.document.write('</body></html>');
    
//     // Close the document and trigger the print dialog
//     printWindow.document.close();
//     printWindow.focus();
//     printWindow.print();
//     printWindow.close();
// }

// // Add a click event listener to the button with ID "print-pdf-btn" to trigger the printPDF function
// document.getElementById('savePdf').addEventListener('click', printPDF);
