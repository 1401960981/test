import axios from "axios";

function getUserData() {
  return axios({
    method: "GET",
    url: "https://7fad1d1d-ea69-435b-8058-f5004ce6a434.mock.pstmn.io/loginG",
  });
}
export default {
  getUserData,
};
