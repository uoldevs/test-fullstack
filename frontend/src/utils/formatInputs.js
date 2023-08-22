export const formatCPF = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const formattedValue = cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return formattedValue;
};

export const formatTelefone = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const formattedValue = cleanedValue.length === 11
        ? cleanedValue.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        : cleanedValue.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    return formattedValue;
};
