import React, { useState } from "react";

import robot from "../../assets/images/png/robot.png";
import { Add, Cross, File } from "../../components/Common/icon";
import { SlectCard } from "../../components/Common/Helper";
import Sidebar from "../../components/Common/Sidebar";
import Navbar from "../../components/Common/Navbar";

const NewFile = () => {
  const [showModal, setShowModal] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = (event) => {
    const File = event.target.files[0];

    const images = URL.createObjectURL(File);
    setSelectedFile(images);
    console.log(selectedFile);
  };

  return (
    <>
      <div className=" h-full w-full relative overflow-hidden">
        <div className="flex">
          <div className="lg:min-w-[257px] md:min-w-[170px]">
            <div className="md:fixed">
              <Sidebar />
            </div>
          </div>
          <div className="mt-0 w-full">
            <Navbar />
            <div className="lg:px-10 px-3 bg-light-white w-full">
              <div className="flex justify-between items-center md:pt-10 pt-5">
                <div className="flex gap-3 justify-start items-center">
                  <div className="w-[44px] h-[44px] bg-[#f2f2fd] rounded-md border border-[#b3cff9] flex justify-center items-center">
                    <File />
                  </div>
                  <div className="m-0">
                    <p className="font-Jost font-medium md:text-md text-2sm text-light-black">
                      Files
                    </p>
                    <p className="font-Jost font-medium md:text-sm text-xsm text-light-blue">
                      5 resources
                    </p>
                  </div>
                </div>
                <button
                  className="bg-gradient-to-br flex gap-2.5 items-center from-sky-500 to-blue-500 rounded-lg font-Jost font-medium text-xmd py-2.5 px-3 text-white"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  <span>
                    <Add />
                  </span>
                  Add New File
                </button>
                {showModal ? (
                  <>
                    <div className="absolute md:top-[18%] md:right-[12%] top-[25%] sm:right-[10%] right-[5%] z-50">
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto sm:max-w-[330px] max-w-[280px]">
                          <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 ">
                              <h3 className="ext-light-black text-center text-xl font-medium font-Jost">
                                Upload your files
                              </h3>
                              <button
                                className=" ml-auto float-right "
                                onClick={() => setShowModal(false)}
                              >
                                <Cross />
                              </button>
                            </div>
                            <div className="relative md:py-6 px-6 flex-auto outline-none focus:outline-none">
                              <div class="md:w-[285px] w-[230px] min-h-[140px] sm:px-12 px-6 py-5 bg-[#f1f4ff] rounded-md border border-blue-500 border-opacity-60 flex-col justify-center items-center border-dashed gap-2.5 flex ">
                                {selectedFile ? (
                                  // Display image preview and hide label and input
                                  <img
                                    src={selectedFile}
                                    alt="Uploaded Preview"
                                    style={{
                                      maxWidth: "100%",
                                      maxHeight: "200px",
                                      marginBottom: "10px",
                                    }}
                                  />
                                ) : (
                                  // Display label and input for file upload
                                  <div class="flex-col gap-2.5 flex">
                                    <p class="text-white-gray text-center text-xmd font-medium font-Jost">
                                      Drag & Drop your files here
                                    </p>
                                    <p class="text-white-gray text-center text-xmd font-medium font-Jost">
                                      OR
                                    </p>
                                    <label
                                      className="cursor-pointer block text-white bg-gradient-to-br from-sky-500 to-blue-500 rounded-lg font-Jost font-medium text-xmd text-center py-2.5 px-3"
                                      htmlFor="fileInput"
                                    >
                                      Upload your file
                                    </label>
                                    <input
                                      type="file"
                                      id="fileInput"
                                      className="hidden"
                                      onChange={handleUpload}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-6 sm:mx-5">
                              <p className="text-white-gray text-center text-xmd font-medium font-Jost">
                                Supported File :
                              </p>
                              <p className="text-light-black text-center text-xmd font-medium font-Jost">
                                DOCX, XLSX, PDF
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </div>
              <div className="w-full h-[1px] bg-[#e2e8f0] my-8"></div>
              <div className="overflow-x-scroll">
                <div className=" min-w-[735px] md:min-w-[400px] lg:w-full">
                  <div className=" flex justify-between items-center pb-2.5">
                    <div className="flex md:max-w-[295px] max-w-[250px] w-full justify-start items-center">
                      <input
                        type="checkbox"
                        className="md:w-[25px] md:h-[23px] w-5 h-5"
                      />
                      <p className="font-Jost ms-28 font-medium textxmd text-light-black">
                        Name
                      </p>
                    </div>{" "}
                    <p className="font-Jost font-medium text-xmd text-light-black">
                      Files type
                    </p>
                    <p className="font-Jost max-w-[102px] w-full text-center font-medium text-xmd text-light-black">
                      Create on
                    </p>
                    <div className="w-10"></div>
                  </div>
                  {SlectCard.map((value) => (
                    <div className="bg-white w-full py-5 ps-5 pe-8 flex justify-between items-center rounded-md border border-[#b3cff9] md:mt-[18px] mt-4">
                      <div className="flex justify-start items-center md:gap-5 gap-3.5">
                        <input type="checkbox" className="w-[20px] h-[20px]" />
                        <img
                          className="md:w-[50px] md:h-[50px] w-[38px] h-[38px]"
                          src={value.image}
                          alt="document"
                        />
                        <div>
                          <p className="font-Jost font-medium md:text-lg text-2sm text-light-black">
                            {value.titel}
                          </p>
                          <p className="font-Jost font-medium md:text-xmd text-xsm text-dark-gray">
                            {value.lastDate}
                          </p>
                        </div>
                      </div>
                      <p className="font-Jost font-medium md:text-xmd text-sm text-dark-blue">
                        {value.fileType}
                      </p>
                      <div className="flex justify-start gap-2.5 items-center">
                        {value.calendar}
                        <p className="font-Jost font-medium md:text-xmd md:text-xs text-2sm text-dark-gray">
                          {value.createDate}
                        </p>
                      </div>
                      {value.moreButton}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end md:mt-8 mt-7 me-16 pb-28">
                <button className="bg-gradient-to-br from-sky-500 to-blue-500 rounded-lg font-Jost font-medium md:text-xl text-xmd py-2.5 px-10 text-white">
                  Process Deal
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute md:bottom-[10%] bottom-[-10%] right-0"
          src={robot}
          alt="robot"
        />
      </div>
    </>
  );
};

export default NewFile;
