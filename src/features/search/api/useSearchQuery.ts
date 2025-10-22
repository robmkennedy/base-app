import { useQuery } from '@tanstack/react-query';
import type { SearchQuery, SearchResultItem } from '@features/search/types/searchTypes';

export const SEARCH_API = `https://potterapi-fedeperin.vercel.app/en/characters/`;

const fetchResult = async (searchTerm: string | undefined): Promise<SearchResultItem[]> => {
    const response = await fetch(`${SEARCH_API}?search=${searchTerm}`);
    return response.json();
};

export const useSearchQuery = ({ searchTerm }: SearchQuery) => {
    return useQuery({
        queryKey: ['challenge', searchTerm],
        queryFn: () => fetchResult(searchTerm),
        enabled: !!searchTerm
    });
};