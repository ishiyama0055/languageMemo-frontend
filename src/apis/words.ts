import { getRequest, postRequest } from "../utils/api";

export const getWordsApi = async () => {
  const endpoint = "/word/getwords";
  const data = await getRequest(endpoint);
  console.log(data);
  return data as any;
};

export const registerWordApi = async (body: any) => {
  const endpoint = "/word/registerword";
  const res = await postRequest(endpoint, body);
  return res;
};
