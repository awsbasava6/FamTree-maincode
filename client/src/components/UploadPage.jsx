import React, { useState } from "react";
import API from "../api";

function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Select file first");

    try {
      // STEP 1: Get signed URL from backend
      const res = await API.get("/upload-url");

      const { url, key } = res.data;

      // STEP 2: Upload file directly to S3
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });

      // STEP 3: Construct final file URL
      const fileUrl = `${import.meta.env.VITE_S3_BASE_URL}/${key}`;

      setUploadedUrl(fileUrl);

      alert("Upload successful!");

    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload File</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload}>
        Upload
      </button>

      {uploadedUrl && (
        <div>
          <p>Uploaded URL:</p>
          <a href={uploadedUrl} target="_blank">{uploadedUrl}</a>
        </div>
      )}
    </div>
  );
}

export default UploadPage;

