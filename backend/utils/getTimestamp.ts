const getTimestamp = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60000;
  const timestamp = new Date(date.getTime() - offset).toISOString();

  return timestamp;
};

export default getTimestamp;
