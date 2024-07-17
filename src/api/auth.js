const { AuthInstance, Instance } = require(".");

const signUpApi = async (data) => {
  const response = await Instance.post("/company/signUp", {
    logo: data.image,
    registration_number: data.registration_number,
    industry_sector: data.industrySector,
    name: data.name,
    info: data.info,
    account_id: data.id,
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
