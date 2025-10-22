import { http, HttpResponse } from 'msw';
import { SEARCH_API } from '@features/search/api/useSearchQuery';
import type { SearchResultItem } from '@features/search/types/searchTypes';

export const handlers = [
    http.get(SEARCH_API, ({ request }) => {
        const url = new URL(request.url);
        const searchTerm = url.searchParams.get('search');

        const result: SearchResultItem[] = [
            { fullName: 'Rob', birthdate: 'May' },
            { fullName: 'Mary', birthdate: 'June' }
        ];

        return HttpResponse.json(searchTerm ? result : []);
    })
];
