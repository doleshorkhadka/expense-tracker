const getYear = (date) => {
  const dateInstance = new Date(date);
  return dateInstance.getFullYear();
};

export default getYear;
