import React from "react";
import resume from "../NadeemResume.pdf";

const ResumePDF = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <object data={resume} type="application/pdf" width="100%" height="200%">
        <p>
          Sorry, your browser doesn't support embedded PDFs. You can download
          the PDF <a href={resume}>here</a>.
        </p>
      </object>
    </div>
  );
};

export default ResumePDF;
