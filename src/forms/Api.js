import axios from "axios";

export const apiGet = link => {
  axios
    .get(link)
    .then(res => {
      console.log("api response", res);
    })
    .catch(err => {
      console.log("api error", err);
    });
};

export const apiPost = link => {
  axios.post();
};
