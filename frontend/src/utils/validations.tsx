export function validateCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, '');
  
    if (cpf.length !== 11) return false; 
      if (/^(\d)\1+$/.test(cpf)) return false;
  
    let sum = 0;
    let remainder = 0;
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
  
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;
  
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
  
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;
  
    return true;
  }

export function validatePhoneNumber(phoneNumber: string) {
    phoneNumber = phoneNumber.replace(/[^\d]/g, '');
    if (phoneNumber.length!== 11) return false;
    return true;
  }

export function validateEmail(email: string) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }