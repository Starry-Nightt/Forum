import api from "../shared/utils/api";

const getAllUser = () => {
  return api().get("/users");
};

const getUserByEmail = (detail) => {
  const { email } = detail;
  return api().get(`/users`, { params: { email } });
};

const getUserById = (id) => {
  return api().get(`/users/${id}`);
};

export { getAllUser, getUserByEmail, getUserById };
