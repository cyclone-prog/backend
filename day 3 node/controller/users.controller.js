const users = ["ram", "sam", "harry"];
export const getUsers = (req, res) => {
  res.status(200).json({
    status: true,
    data: users,
    message: "users fetched successfully ",
  });
};

export const createUser = (req, res) => {
  const { name } = req.body;
  users.push(name);
  res.status(200).json({
    status: true,
    users,
    message: "users successfully created",
  });
};
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  users[id] = name;
  res.status(200).json({
    status: true,
    users,
    message: "users updated successfully",
  });
};
export const deleteUser = (req, res) => {
  const { id } = req.params;
  delete users[id];
  res.status(200).json({
    status: true,
    users,
    message: "user deleted successfully",
  });
};
