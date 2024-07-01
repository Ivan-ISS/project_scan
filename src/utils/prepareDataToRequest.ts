import { ISearchData, ISearchRequest } from '../types/scanTypes';

export function prepareDataToRequest(dataToPrepare: ISearchData): ISearchRequest {

    console.log('dataToPrepare: ', dataToPrepare);

    return {
        issueDateInterval: {
            startDate: `${dataToPrepare.startDate}T00:00:00+03:00`,
            endDate: `${dataToPrepare.endDate}T23:59:59+03:00`,
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: 'company',
                        sparkId: null,
                        entityId: null,
                        inn: dataToPrepare.inn,
                        maxFullness: dataToPrepare.maxFullness ? true : null,
                        inBusinessNews: dataToPrepare.inBusinessNews ? true : null,
                    }
                ],
                onlyMainRole: dataToPrepare.mainRole  ? true : null,
                tonality: dataToPrepare.tone === 'Любая' ? 'any' : dataToPrepare.tone === 'Позитивная' ? 'positive' : 'negative' ,
                onlyWithRiskFactors: dataToPrepare.riskFactors  ? true : null,
                riskFactors: {
                    and: [],
                    or: [],
                    not: [],
                },
                themes: {
                    and: [],
                    or: [],
                    not: [],
                }
            },
            themesFilter: {
                and: [],
                or: [],
                not: [],
            }
        },
        searchArea: {
            includedSources: [],
            excludedSources: [],
            includedSourceGroups: [],
            excludedSourceGroups: [],
        },
        attributeFilters: {
            excludeTechNews: dataToPrepare.techNews ? true : null,
            excludeAnnouncements: dataToPrepare.annoucements ? true : null,
            excludeDigests: dataToPrepare.digests ? true : null,
        },
        similarMode: 'duplicates',
        limit: +dataToPrepare.quantity,
        sortType: 'sourceInfluence',
        sortDirectionType: 'desc',
        intervalType: 'month',
        histogramTypes: [
            'totalDocuments',
            'riskFactors'
        ],
    };
}