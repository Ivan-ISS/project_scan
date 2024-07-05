import { ISummaryResponse, ISummary } from '../types/scanTypes';

export function prepareDataSummary(dataToPrepare: ISummaryResponse): ISummary[] {

    const result: ISummary[] = [];

    if (dataToPrepare?.data.length) {
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
    }

    return result;
}