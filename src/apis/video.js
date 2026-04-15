import http from "./http";

export const getVideos = async (params) => {
  const response = await http.get("/video/all", { params });
  return response.data;
};

export const getVideoById = async (id) => {
  const response = await http.get(`/video/${id}`);
  return response.data;
};
