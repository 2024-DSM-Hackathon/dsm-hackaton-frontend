import { AuthInstance } from ".";

const companyInfoApi = async () => {
  const response = await AuthInstance.get(`/company/info`);
  return response.data;
};

const companyAnswerApi = async ({ id }) => {
  const response = await AuthInstance.get(`/answer/${id}`);
  return response.data;
};
export { companyInfoApi, companyAnswerApi };
