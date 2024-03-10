import React from 'react';
import resume from '../resume.pdf';

const ResumePDF = () => {
  return (
    <div>
    <object data={resume} type="application/pdf" width="100%" height="100%">
    <p>Sorry, your browser doesn't support embedded PDFs. You can download the PDF <a href={resume}>here</a>.</p>
    </object>
  </div>
  );
};

export default ResumePDF;