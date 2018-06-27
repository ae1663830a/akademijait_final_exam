/* eslint-disable */
export const updateObject = (oldObject, updatedProps) => {
    return {
        ...oldObject,
        ...updatedProps
    }
};

export const checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required && isValid) {
        isValid = value.trim() !== '';
    }
    if (rules.minLength && isValid) {
        isValid = value.length >= rules.minLength;
    }
    if (rules.maxLength && isValid) {
        isValid = value.length <= rules.maxLength;
    }
    if (rules.isEmail && isValid) {
        // eslint-disable-next-line
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = pattern.test(value);
    }
    if (rules.isNumber && isValid) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value);
    }
    return isValid;
};


export const toFirstUpperCaseToLowerCase = value => value && value.replace(/[^a-ząčęėįšųūž„“._\- ]/i, '').charAt(0).toUpperCase() + value.replace(/[^a-ząčęėįšųūž„“._\- ]/i, '').slice(1).toLowerCase();
export const onlyNumbers = value => value && value.replace(/[^\d]/g, '');
export const onlyFloatNumbers = value => value && value.replace(',', '.').replace(/[^\d\.]/g, "").replace(/\./, "x").replace(/\./g, "").replace(/x/, ".");
export const toUpperCase = value => value && value.replace(/[^a-ząčęėįšųūž„“._\- ]/i, '').toUpperCase();

export const stringToDate = value => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 4) {
        return onlyNums
    }
    if (onlyNums.length <= 6) {
        return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}`
    }
    return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4, 6)}-${onlyNums.slice(6, 8)}`
};
