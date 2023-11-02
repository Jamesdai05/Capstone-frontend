import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../utils/baseUrl";

function ImgTest() {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // Specify the URL of the image you want to retrieve
    const imageUrl = `${baseURL}/api/posts/566f46e576ac86a29329115e460bcbd8.jpeg`;
    console.log(imageUrl);

    // Make an Axios GET request to retrieve the image
    axios
      .get(imageUrl, { responseType: "arraybuffer" }) // Set responseType to 'arraybuffer' to handle binary data
      .then((response) => {
        // Convert the binary response data to a base64 encoded string
        const imageBase64 = Buffer.from(response.data, "binary").toString(
          "base64"
        );

        // Set the image source to display the image
        setImageSrc(`data:image/jpeg;base64,${imageBase64}`);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  return (
    <div>
      <img src={imageSrc} alt="Image1" />
    </div>
  );
}

export default ImgTest;
