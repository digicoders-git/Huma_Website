import http from "./http";

export const getGalleries = async (params) => {
  const response = await http.get("/gallery/all", { params });
  return response.data;
};

export const getGalleryById = async (id) => {
  const response = await http.get(`/gallery/${id}`);
  return response.data;
};
