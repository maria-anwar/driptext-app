import axios from "axios";
const setAuthHeader = (token) => {
    axios.defaults.headers.common["access-token"] = token;
  };

  export default setAuthHeader;