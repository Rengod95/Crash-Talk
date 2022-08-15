import axios from "axios";
import GV from "./global_variables";

const requester = (function () {
  return {
    postUserData: async (header, data) => {
      const response = await axios.post(GV.getServerURL(), {
        headers: header,
        content: data,
        validity: 0,
      });
      return response;
    },
  };
})();

export default requester;
