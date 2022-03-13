import { create } from "apisauce";

const client = create({
  baseURL: "http://192.168.231.236:9000/api",
});

export default client;
