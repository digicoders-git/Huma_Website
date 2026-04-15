import http from "./http";

export const getSpecialities = async (params) => {
  const response = await http.get("/speciality/all", { params });
  return response.data;
};

export const getSpecialityById = async (id) => {
  const response = await http.get(`/speciality/${id}`);
  return response.data;
};


