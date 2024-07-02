import { IDocuments, IContentRequest } from '../types/scanTypes';

export function prepareDocsToRequest(dataToPrepare: IDocuments[]): IContentRequest  {

    const result: string[] = [];

    dataToPrepare.forEach(item => {
        result.push(item.encodedId);
    });

    return { ids: result };
}