"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validatePhoneNumber(phoneNumber) {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    if (cleanedPhoneNumber.length !== 11) {
        return false;
    }
    const validDDDs = ['61', '62', '64', '65', '66', '67', '82', '71', '73', '74', '75', '77', '85', '88',
        '98', '99', '83', '81', '87', '86', '89', '84', '79', '68', '96', '92', '97', '91', '93', '94', '69', '95',
        '63', '27', '28', '31', '32', '33', '34', '35', '37', '38', '21', '22', '24', '11', '12', '13', '14',
        '15', '16', '17', '18', '19',
        '41', '42', '43', '44', '45', '46', '51', '53', '54', '55', '47', '48', '49'];
    const ddd = cleanedPhoneNumber.slice(0, 2);
    if (!validDDDs.includes(ddd)) {
        return false;
    }
    return true;
}
exports.default = validatePhoneNumber;
