import { get, post, put, del } from "../../utils/https.js";

// 获取User列表
export const getCategoryService = async (id = "list") => {
  try {
    const response = await get(`/category/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
