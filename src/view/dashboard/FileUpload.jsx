import React, { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();

  const handleUpload = (event) => {
    const File = event.target.files[0];

    const images = URL.createObjectURL(File);
    setSelectedFile(images);
    console.log(selectedFile);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="fileInput"
      >
        Choose File
      </label>
      <input
        type="file"
        id="fileInput"
        className="border rounded p-2 w-full"
        onChange={handleUpload}
      />
      <img
        src={selectedFile}
        alt="Uploaded Preview"
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      />
      {/* <button
        onClick={handleUpload}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload
      </button> */}
    </div>
  );
};

export default FileUpload;
