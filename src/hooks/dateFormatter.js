export const dateFormatter = (timestamp) => {
  const date = new Date(timestamp).toISOString().slice(0, 10);
  // const year = date.getFullYear();
  // const month = date.getMonth() + 1; 
  // Add 1 because getMonth() returns values from 0 to 11
  // const day = date.getDate();

  // return `${year}-${month}-${day}`
  return date
};
