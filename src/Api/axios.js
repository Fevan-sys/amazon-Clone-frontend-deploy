import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions
  //  baseURL: "http://127.0.0.1:5001/clone-c5e9d/us-central1/api",


  // deployed function of firebase function
  // baseURL: "https://api-l5ac5sgk3q-uc.a.run.app/",

 

//deployed version of amazon server on render.com
 baseURL: "https://amazon-api-deploy-tphu.onrender.com"



 
  //deployed version of amazon server on render.com
  //  baseURL: "https://amazon-api-delpoy.onrender.com",
});

export { axiosInstance };



