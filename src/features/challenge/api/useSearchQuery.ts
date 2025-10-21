import { useQuery } from '@tanstack/react-query';
import type { SearchQuery, SearchResult } from '@features/challenge/types/challengeTypes';

const fetchResult = async (searchTerm: string | undefined): Promise<SearchResult> => {
    const response = await fetch(`https://potterapi-fedeperin.vercel.app/en/characters/?search=${searchTerm}`);
    return response.json();
};

export const useSearchQuery = ({ searchTerm }: SearchQuery) => {
    return useQuery({
        queryKey: ['challenge', searchTerm],
        queryFn: () => fetchResult(searchTerm),
        enabled: !!searchTerm
    });
};