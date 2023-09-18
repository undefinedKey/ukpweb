import { get, post, put, del } from "../../utils/https.js";

// 获取User列表
export const getUserService = async (id = "list") => {
  try {
    const response = await get(`/user/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// 添加用户
export const addUserService = async (data) => {
  let bodydata = {
    username: data.username,
  };
  const response = await post(`/user`, bodydata);
  return response;
};

// 修改用户
export const updateUserService = async (data) => {
  let bodydata = {
    username: data.username,
  };
  const response = await put(`/user/${data.id}`, bodydata);
  return response;
};

// 删除用户
export const deleteUserService = async (id) => {
  const response = await del(`/user/${id}`);
  return response;
};
