export const getTokenLS = () => {
  const token = localStorage.getItem("clinic_token");
  return token ? JSON.parse(token) : null;
};
