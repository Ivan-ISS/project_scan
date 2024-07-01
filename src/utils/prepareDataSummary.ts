import { IPublicationSummaryResponse, IPublicationSummary } from '../types/publicationTypes';

export function prepareDataSummary(dataToPrepare: IPublicationSummaryResponse): IPublicationSummary[] {

    console.log('dataToPrepare: ', dataToPrepare);

    const result: IPublicationSummary[] = [];

    dataToPrepare.data[0].data.forEach((item, index) => {
        result.push(
            {
                date: item.date,
                valueTotal: item.value,
                valueRisk: dataToPrepare.data[1].data[index].value,
            },
        );
    });

    result.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
      
        return dateA.getTime() - dateB.getTime();
      });

    console.log('result: ', result);

    return result;
}