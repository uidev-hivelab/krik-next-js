export const validateEmail = (email) => {
  const regextSt = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regextSt.test(email);
};
