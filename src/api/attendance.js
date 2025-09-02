import { ASAMS_API } from "./axiosInstance";

// export const getAttendance = async () => {
//   try {
//     const { data } = await ASAMS_API.get(`/students`);
//     return data;
//   } catch (error) {
//     console.log("Fetching attendance unsuccessful: ", error);
//     throw error;
//   }
// };

export const getAttendee = async (studentNumber) => {
  const { data } = await ASAMS_API.get(`/students/${studentNumber}`);
  return data.data;
};

export const saveAttendance = async ({ id, attendanceDetails }) => {
  const { data } = await ASAMS_API.put(
    `/students/${id}/attendance`,
    attendanceDetails
  );
  return data.message;
};
