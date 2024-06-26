export interface IFields {
    varName: string;
}

export function createFieldsString(fields: IFields[]) {
    const fieldNames: { [key: string]: string } = {};
    fields.forEach((field) => fieldNames[field.varName] = '');
    return fieldNames;
}

export function createFieldsBoolean(fields: IFields[]) {
    const fieldNames: { [key: string]: boolean } = {};
    fields.forEach((field) => fieldNames[field.varName] = true);
    return fieldNames;
}