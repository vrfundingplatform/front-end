import axios from "axios";

export const Auth = () => {
  return axios.create({
    baseURL: "https://vrfunding.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
