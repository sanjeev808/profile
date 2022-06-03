import React from 'react'
import html2canvas from 'html2canvas'
import {jsPDF} from 'jspdf'


export default function PdfFile({roortElementId,downloadFileName}) {
    const downloadFileDocument =()=>{
        const input = document.getElementById(roortElementId)
        html2canvas(input, {
          letterRendering: true,
          quality: 4,
          scale: 2,
          dpi: 144,
          useCORS: true,
          allowTaint: true,
        }).then((canvas) =>{
            const imgData = canvas.toDataURL("image/png", 1)
            const pdf = new jsPDF({
              orientation: "portrait",
              format: "a4",
            });
            const imgProperties = pdf.getImageProperties(imgData);
            const pdfWidth = 500;
            const pdfHeight = 500;
            pdf.addImage(imgData, "JPEG",0,0,0, 0, pdfWidth, pdfHeight)
            pdf.save(`${downloadFileName}`)
        })
    }
  return (
    <div>
        <button onClick={downloadFileDocument}>Download Page</button>
    </div>
  )
}
