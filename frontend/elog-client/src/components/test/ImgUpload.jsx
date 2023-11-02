import React, { useEffect } from 'react'
import { useState } from "react";
import axios from "axios";
import { baseURL } from '../../utils/baseUrl';



async function postImage({image, description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)

  const result = await axios.post(
    `${baseURL}/api/posts/imageupload`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return result.data
}






// const getImageResult = await axios.get(
  //     `${baseURL}/api/posts/imageupload/:key`,
  //     formData,
  //     { headers: { "Content-Type": "multipart/form-data" } }
  //   );
  //   return result.data
  // }





export default function ImgUpload() {
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [base64, setBase64] = useState();



  const submit = async (event) => {
    event.preventDefault();
    const result = await postImage({ image: file, description });
    setImages([result.image, ...images]);
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  // const instance = axios.create({
  //   baseURL: `${baseURL}`,
  // });

  // async function getUsers() {
  //   const response = await instance.get(
  //     "/imageupload/6789cc08580ddb832af47c1c827709e5"
  //   );

  //   // Do something with the response data
  //   console.log(response.data);
  // }

  // getUsers();

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${baseURL}/api/posts/imageupload/6789cc08580ddb832af47c1c827709e5`,
  //       {
  //         responseType: "arraybuffer",
  //       }
  //     )
  //     .then((response) =>
  //       setBase64(Buffer.from(response.data, "binary").toString("base64"))
  //     );
  // }, []);

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        ></input>
        <button type="submit">Submit</button>
      </form>

      {/* {images.map((image) => (
        <div key={image}>
          <img src={image} alt="img"></img>
        </div>
      ))} */}
    </div>
  );
}


