import http from './http';

export const createEnquiry = async (enquiryData) => {
  try {
    const response = await http.post('/enquiry/create', enquiryData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const createFreeConsultation = async (consultationData) => {
  try {
    const response = await http.post('/free-consultation/create', consultationData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};