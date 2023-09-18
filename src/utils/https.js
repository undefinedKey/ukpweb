import axios from "axios";

// 创建一个 Axios 实例
const instance = axios.create({
  // baseURL: "http://192.168.1.212:8080", // 设置基本的 API 地址
  baseURL: "http://127.0.0.1:8080", // 设置基本的 API 地址
  timeout: 5000, // 设置请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做一些处理，例如添加请求头等
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据进行处理，例如解析数据等
    return response.data;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

// 封装 GET 请求
export function get(url, params) {
  return instance.get(url, { params });
}

// 封装 POST 请求
export function post(url, data) {
  return instance.post(url, data);
}

// 封装 PUT 请求
export function put(url, data) {
  return instance.put(url, data);
}

// 封装 DELETE 请求
export function del(url) {
  return instance.delete(url);
}
// 其他请求方法类似，例如 PUT、DELETE 等

export default instance;
