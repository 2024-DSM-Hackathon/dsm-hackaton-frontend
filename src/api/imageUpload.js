import axios from "axios";

const baseUrl = "http://localhost:8080";

const imageUpload = async (imageFile) => {
  const form = new FormData();
  form.append("file", imageFile);

  const response = await axios.post(`${baseUrl}/file`, form);
  return response.data;
};

export { imageUpload };
