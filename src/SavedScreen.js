import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const SavedScreen = ({ elements }) => {
  const downloadPdf = () => {
    const element = document.getElementById("saved-screen");
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 size
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("saved_screen.pdf");
    });
  };

  return (
    <div id="saved-screen">
      <h1>Saved Screen</h1>
      <div className="canvas" style={{ position: "relative" }}>
        {elements.map((item) => (
          <div
            key={item.id}
            style={{
              border: "2px solid red",
              padding: "1rem",
              width: item.width,
              height: item.height,
              position: "absolute",
              left: item.defaultX,
              top: item.defaultY,
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}>
      <button onClick={downloadPdf}>Download as PDF</button>
      </div>
    </div>
  );
};

export default SavedScreen;
