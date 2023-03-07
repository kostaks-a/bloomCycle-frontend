import React, { useState } from "react";
import axios from "axios";

function TestPage() {
  const [images, setImages] = useState([]);
  const [ImageRemove, setImageRemove] = useState(null);

  function handleRemoveImage(imgObj) {}
  function handleOpenWidget() {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "drklfh8uq",
        uploadPreset: "cimzqsjx",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
    // open widget
    myWidget.open();
  }

  return (
    <div className="App">
      <button
        id="upload-widget"
        className="cloudinary-button"
        onClick={() => handleOpenWidget}
      >
        Upload Picture
      </button>
      <div className="images-preview-container">show pictures</div>
    </div>
  );
}

export default TestPage;
