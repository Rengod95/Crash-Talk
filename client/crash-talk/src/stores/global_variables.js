const GV = (function () {
  const URL = "http://localhost:3000/";
  const HEADER = {
    register: "REGISTER_USER",
    login: "LOGIN_USER",
  };
  const defaultUserForm = {
    name: undefined,
    nickname: undefined,
    password: undefined,
    email: undefined,
    symbol_id: undefined,
  };

  const defaultLoginForm = {
    email: undefined,
    password: undefined,
  };

  return {
    getServerURL: () => URL, // URL 기본값
    getHeaders: () => HEADER,
    getDefaultUserForm: () => defaultUserForm,
    getDefaultLoginForm: () => defaultLoginForm,
  };
})();

export default GV;
