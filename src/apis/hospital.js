import http from "./http";


export const getHospitals = async (params) => {
  const response = await http.get("/hospital/all", { params });
  return response.data;
};

export const getHospitalById = async (id) => {
  const response = await http.get(`/hospital/${id}`);
  return response.data;
};

