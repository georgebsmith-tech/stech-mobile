import axios from "axios";
import { baseURL } from "../../config";

export const getData = async (path) => {
  try {
    const { data } = await axios.get(baseURL + path);

    return data;
  } catch (error) {
    if (error.response) {
      console.log(1);
      console.log(error.response.data);
      throw new Error(error.response.data);
    } else if (error.request) {
      console.log(2);
      console.log(error.request);
    } else {
      console.log(3);
      console.log(error.message);
    }
    throw new Error();
  }
};

export const getProtectedData = async (path, body, token) => {
  try {
    console.log(token);
    const { data } = await axios.get(
      baseURL + path,

      {
        headers: {
          authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      }
    );

    return data;
  } catch (error) {
    let outData = {};
    if (error.response) {
      console.log(1);
      outData = error.response.data;
      console.log(error.response.data);
    } else if (error.request) {
      console.log(2);
      console.log(error.request);
    } else {
      console.log(3);
      console.log(error.message);
    }
    throw outData;
    return outData;
  }
};
