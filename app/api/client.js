import { create } from "apisauce";

import cache from "../utils/cache";

const client = create({
  baseURL: "http://192.168.231.236:9000/api",
});

const get = client.get;
client.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    // console.log("URL ", url);
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default client;
