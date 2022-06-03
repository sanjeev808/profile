import React, { useRef } from "react";
import './CV.css'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import CvLeftSide from './LeftSide/CvLeftSide'
import CvRightSide from './RightSide/CvRightSide'
// import PdfFile from './PdfFile'
export default function CV({ }) {
  const printRef = React.useRef();
  const printPDF = async () => {
    const divToDisplay = printRef.current;
    const doc = new jsPDF();
    html2canvas(divToDisplay, {
      letterRendering: true,
      quality: 4,
      scale: 2,
      dpi: 100,
      useCORS: true,
      allowTaint: true,
    }).then(function (canvas) {
      const divImage = canvas.toDataURL("image/PNG", 1);
      const pdf = new jsPDF({
        orientation: "landscape",
        format: "a3",
      });
      const imgProperties = pdf.getImageProperties(divImage);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      pdf.addImage(divImage, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };

  return (
    // <div className='Cv'  id='pagetodownload'>
    //   <div className='d-flex pdf-line-below   pdfile' ref={printRef}>
    //     <div className='cvleft'>
    //       <CvLeftSide/>
    //     </div>
    //   {/* <div className='cvright'>
    //      <CvRightSide/>
    //  </div> */}
    //   </div>
    //   <PdfFile roortElementId="pagetodownload" downloadFileName="testpage"/>
    // </div>

    <div className="px-5 h3 ">

      <div ref={printRef} className=" d-flex text-uppercase padd pdFile">
        <div className='cvleft'>
          <CvLeftSide />
        </div>
          <div className='cvright'>
          <CvRightSide/>
      </div> 
      </div>
      <div className="text-center">
        <button onClick={printPDF} className="my-3 btn btn-primary">
          Generate Salary Slip
        </button>
      </div>
    </div>
  )
}
