import axios from "axios";
import { storeToken, storeUserData } from "./auth/localStorage";

const baseUrl = "http://localhost:4000";

const formImage = async (id, image, destination) => {
  var formData = new FormData();
  var imagefile = image;
  formData.append("image", imagefile);
  await axios.post(
    `${baseUrl}/class/uploadPic/${id}?destination=${destination}&&name=img`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
const formIcon = async (id, image) => {
  var formData = new FormData();
  var imagefile = image;
  formData.append("image", imagefile);
  await axios.post(
    `${baseUrl}/class/uploadPic/${id}?destination=class&&name=icon`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const PostAuth = async (url, data) => {
  const returnValue = [];
  await axios
    .post(`${baseUrl}/${url}`, data)
    .then((data) => {
      storeToken(data.data.data[0]);
      storeUserData(data.data.data[1]);
    })
    .catch((err) => {
      returnValue.push(...err.response.data.message);
    });

  return returnValue;
};

export const PostField = async (url, data) => {
  const returnValue = [];

  await axios
    .post(`${baseUrl}/class/${url}`, data)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      returnValue.push(...err.response.data.message);
    });
  return returnValue;
};

export const PostClass = async (url, params, data, image, icon) => {
  const returnValue = [];

  await axios
    .post(`${baseUrl}/class/${url}/${params}`, data)
    .then(async (data) => {
      const id = data.data.data._id;
      await formImage(id, image, "class");

      await formIcon(id, icon).catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return returnValue;
};
export const PostQuestions = async (url, params, data, image, icon) => {
  const returnValue = [];
  await axios
    .post(`${baseUrl}/class/${url}/${params}`, data)
    .then(async (data) => {
      const id = data.data.data._id;
      await formImage(id, image, "question").catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err);
      returnValue.push(err.response.data.message);
      console.log(returnValue);
    });
  return returnValue;
};
