import { useGlobalStore } from '@state/store';

export const useSearchTerm = (): readonly [string, (searchTerm: string) => void] => {
    const searchTerm = useGlobalStore((state) => state.searchTerm);
    const setSearchTerm = useGlobalStore((state) => state.setSearchTerm);
    return [searchTerm, setSearchTerm];
}