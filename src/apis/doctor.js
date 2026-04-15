import http from "./http";


export const getDoctors = async (params) => {
  const response = await http.get("/doctor/all", { params });
  return response.data;
};

export const getDoctorById = async (id) => {
  const response = await http.get(`/doctor/${id}`);
  return response.data;
};
