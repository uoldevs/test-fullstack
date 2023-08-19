export default function validateEmail(email) {
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  console.log(isEmailValid.test(email));
  return isEmailValid.test(email);
 }