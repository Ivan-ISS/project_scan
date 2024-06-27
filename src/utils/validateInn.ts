interface Error {
    code: number;
    message: string;
}
  
export function validateInn(inn: number | string): string {
    let result = false;
    const error: Error = {
        code: 0,
        message: '',
    };
    let innStr: string;
  
    if (typeof inn === 'number') {
        innStr = inn.toString();
    } else if (typeof inn !== 'string') {
        innStr = '';
    } else {
        innStr = inn;
    }
  
    if (!innStr.length) {
        error.code = 1;
        error.message = 'ИНН пуст';
    } else if (/[^0-9]/.test(innStr)) {
        error.code = 2;
        error.message = 'ИНН может состоять только из цифр';
    } else if ([10, 12].indexOf(innStr.length) === -1) {
        error.code = 3;
        error.message = 'ИНН должно состоять из 10 цифр';
        // error.message = 'ИНН может состоять только из 10 или 12 цифр';
    } else {
    const checkDigit = (inn: string, coefficients: number[]): number => {
        let n = 0;
        for (let i = 0; i < coefficients.length; i++) {
            n += coefficients[i] * parseInt(inn[i]);
        }
        return (n % 11) % 10;
    };
  
    let n10: number;
    let n11: number;
    let n12: number;
    switch (innStr.length) {
        case 10:
            n10 = checkDigit(innStr, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
            if (n10 === parseInt(innStr[9])) {
                result = true;
            }
            break;
        case 12:
            n11 = checkDigit(innStr, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
            n12 = checkDigit(innStr, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
            if (n11 === parseInt(innStr[10]) && n12 === parseInt(innStr[11])) {
                result = true;
            }
            break;
        }
  
        if (!result) {
            error.code = 4;
            error.message = 'Неправильное контрольное число';
        }
    }
  
    return error.message;
}