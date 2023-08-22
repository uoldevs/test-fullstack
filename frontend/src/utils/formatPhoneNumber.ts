const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};

export default formatPhoneNumber;
