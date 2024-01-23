import React from "react";

const Abc = () => {
  return (
    <>
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
          onChange={handleFileChange}
        />

        <button
          onClick={handleUpload}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </div>
    </>
  );
};

export default Abc;
