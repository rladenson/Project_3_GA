export const EditData = (data, id, projects) => {
  const newData = data.map((item) => (item._id === id ? projects : item));
  return newData;
};

export const DeleteData = (data, id) => {
  const newData = data.filter((item) => item._id !== id);
  return newData;
};
