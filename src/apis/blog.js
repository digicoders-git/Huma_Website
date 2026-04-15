import http from "./http";

export const getBlogs = async (params) => {
  const response = await http.get("/blog/all", { params });
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await http.get(`/blog/${id}`);
  return response.data;
};
