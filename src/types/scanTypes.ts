// Данные из формы
export interface ISearchData {
    inn: string;
    tone: string;
    quantity: string;
    startDate: string;
    endDate: string;
    maxFullness: string;
    inBusinessNews: string;
    mainRole: string;
    riskFactors: string;
    techNews: string;
    annoucements: string;
    digests: string;
}

// Данные для запроса
export interface ISearchRequest {
    issueDateInterval: {
        startDate: string,                                          // Из формы - startDate
        endDate: string,                                            // Из формы - endDate
    },
    searchContext: {
        targetSearchEntitiesContext: {
            targetSearchEntities: [
                {
                    type: 'company' | 'suggestedPersons',           // В рамках данного проекта используется значение company - согласно ТЗ
                    sparkId: null,                                  // В рамках данного проекта поле должно иметь значение null - согласно ТЗ
                    entityId: null,                                 // В рамках данного проекта поле должно иметь значение null - согласно ТЗ
                    inn: string,                                    // Из формы - inn
                    maxFullness: boolean | null,                    // Из формы - maxFullness
                    inBusinessNews: boolean | null,                 // Из формы - inBusinessNews
                }
            ],
            onlyMainRole: boolean | null,                           // Из формы - mainRole
            tonality: 'any' | 'negative' | 'positive',              // Из формы - tone
            onlyWithRiskFactors: boolean | null,                    // Из формы - riskFactors
            riskFactors: {                                          // В рамках данного проекта не используется
                and: [],                                                // -
                or: [],                                                 // -
                not: [],                                                // -
            },
            themes: {                                               // В рамках данного проекта не используется
                and: [],                                                // -
                or: [],                                                 // -
                not: [],                                                // -
            }
        },
        themesFilter: {                                             // Необязательный запрос (оставим пустым)
            and: [],                                                    // -
            or: [],                                                     // -
            not: [],                                                    // -
        }
    },
    searchArea: {                                                   // В рамках данного проекта не используется - согласно ТЗ
        includedSources: [],                                            // -
        excludedSources: [],                                            // -
        includedSourceGroups: [],                                       // -
        excludedSourceGroups: [],                                       // -
    },
    attributeFilters: {
        excludeTechNews: boolean  | null,                           // Из формы - techNews
        excludeAnnouncements: boolean  | null,                      // Из формы - annoucements
        excludeDigests: boolean  | null,                            // Из формы - digests
    },
    similarMode: 'none' | 'duplicates',                             // Можно выбрать любое значение
    limit: number,                                                  // Из формы - quantity
    sortType: 'issueData' | 'sourceInfluence',                      // Можно выбрать любое значение
    sortDirectionType: 'desc' | 'asc',                              // Можно выбрать любое значение
    intervalType: 'day' | 'week' | 'month' | 'quarter' | 'year'     // В рамках данного проекта необходимо отправлять значение month - согласно ТЗ
    histogramTypes: [
        'totalDocuments',                                           // В рамках данного проекта необходимо отправлять
        'riskFactors'                                               // оба значения - согласно ТЗ
    ],
}

// Данные ответа сервера
export interface ISummaryResponse {
    data: {
        data: {
            date: string;
            value: number;
        }[];
        histogramType: 'totalDocuments' | 'riskFactors';
    }[]
}

// Данные ответа для фронтенда
export interface ISummary {
    date: string;
    valueTotal: number;
    valueRisk: number;
}