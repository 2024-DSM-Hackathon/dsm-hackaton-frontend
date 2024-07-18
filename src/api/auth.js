const { AuthInstance, Instance } = require(".");

const signUpApi = async (data) => {
  const response = await Instance.post("/company/signUp", {
    logo: data.image,
    registrationNumber: data.registration_number,
    industrySector: data.industrySector,
    name: data.name,
    info: data.info,
    accountId: data.id,
    password: data.pw,
  });
  return response.data;
};

const loginApi = async ({ id, pw }) => {
  const response = await Instance.post("/company/signIn", {
    account_id: id,
    password: pw,
  });
  return response.data;
};

export { signUpApi, loginApi };
