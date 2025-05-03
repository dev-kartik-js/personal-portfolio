import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
 import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
 import 'react-pdf/dist/esm/Page/TextLayer.css';

// Use CDN worker source for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdfFile = "/Kartik_Frontend.pdf"; // Ensure it's in public folder

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Display Section */}
       {/* PDF Display Section */}
<Row className="justify-content-center mt-4">
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
    <Document
      file={pdfFile}
      onLoadSuccess={({ numPages }) => {
        console.log("✅ PDF loaded with", numPages, "pages");
        setNumPages(numPages);
      }}
      onLoadError={(error) => {
        console.error("❌ PDF Load Error:", error);
        setError(error);
      }}
      loading={<p>📄 Loading PDF...</p>}
      error={<p>⚠️ Failed to load PDF.</p>}
    >
      {error ? (
        <p>⚠️ Error loading PDF: {error.message}</p>
      ) : (
        <Page
          pageNumber={1}
          scale={width > 786 ? 1.2 : 0.6} // Adjusted scale for smaller view
          renderMode="canvas"
        />
      )}
    </Document>
  </div>
</Row>


        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
