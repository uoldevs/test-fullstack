export const applyMask = (value: string, mask: string): string => {
    let result = '';
    let index = 0;

    for (let i = 0; i < mask.length; i++) {
        if (index >= value.length) break;

        if (mask[i] === '9') {
            while (index < value.length && isNaN(parseInt(value[index], 10))) {
                index++;
            }

            if (index < value.length) {
                result += value[index];
                index++;
            }
        } else {
            result += mask[i];
        }
    }

    return result;
};
