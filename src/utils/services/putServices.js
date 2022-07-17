import axios from "axios";
import baseURL from "../../config/baseURL";

export const putData = async (path, body) => {
  try {
    const { data } = await axios.put(baseURL + path, body);

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

export const putProtectedData = async (path, body, token) => {
  try {
    const { data } = await axios.put(baseURL + path, body, {
      headers: {
        authorization: "Bearer " + token, //the token is a variable which holds the token
      },
    });

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
