import { axiosInstance } from "../../../api/axiosInstance";
///GET///
export const getServiceCategoryReq = () => {
  return axiosInstance.get("category.add/");
};
