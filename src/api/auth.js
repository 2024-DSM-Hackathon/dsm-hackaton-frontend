const { AuthInstance } = require(".");

const signUpApi = async (data) => {
  console.log("data", data);
  const response = await AuthInstance.post("/signup", data);
  return response.data;
};

const loginApi = async () => {
  const response = await AuthInstance.post("/signin", {
    id,
    pw,
  });
  return response.data;
};

export { signUpApi, loginApi };
