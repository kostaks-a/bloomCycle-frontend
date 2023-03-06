import React, { useState } from "react";
import axios from "axios";
import { image } from "cloudinary-react";

function TestPage() {
  const [imageSelected, setImageSelected] = useState("");
  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "cimzqsjx");
    axios
      .post("https://api.cloudinary.com/v1_1/drklfh8uq/image/upload", formData)
      .then((Response) => console.log(Response));
  };
  return (
    <div>
      <input
        type={"file"}
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      ></input>
      <button onClick={uploadImage}>Upload Image</button>
      <Image
        Cloudname="cimzqsjx"
        publicId="https://res.cloudinary.com/drklfh8uq/image/upload/v1678095019/vdumvpm7swyhwj1apqxt.jpg"
      />
    </div>
  );
}

export default TestPage;
