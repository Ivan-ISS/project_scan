export let startDateValue: string;
export let endDateValue: string;

export function setStartDate(startDate: string) {
    startDateValue = startDate;
}

export function setEndDate(endDate: string) {
    endDateValue = endDate;
}

export function validateDate(date: string) {
    let message = '';
    const dateObj = new Date(date);
    const dateNumber = dateObj.getTime();
    const currentDateNumber = new Date().getTime();

    const check = (currentDateNumber - dateNumber) < 0;
    if (check) {
        message = 'Дата в будущем';
    }

    return message;
}

export function validateRangeDate() {
    let message = '';
    const dateObjStart = new Date(startDateValue);
    const dateObjEnd = new Date(endDateValue);
    const dateNumberStart = dateObjStart.getTime();
    const dateNumberEnd = dateObjEnd.getTime();

    const check = (dateNumberEnd - dateNumberStart) < 0;

    if (check) {
        message = 'Диапазон не корректен';
    }

    return message;
}