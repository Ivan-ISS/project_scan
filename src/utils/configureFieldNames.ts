import { IFormFields } from '../types/dataTypes';

export function createFieldsString(fields: IFormFields[]) {
    const fieldNames: { [key: string]: string } = {};
    fields.forEach((field) => fieldNames[field.varName] = '');
    return fieldNames;
}

export function createFieldsBoolean(fields: IFormFields[]) {
    const fieldNames: { [key: string]: boolean } = {};
    fields.forEach((field) => fieldNames[field.varName] = true);
    return fieldNames;
}