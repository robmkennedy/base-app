import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchAbout = async (): Promise<string> => {
    const response = await axios.get<string>('markdown/about.md');
    return response.data;
};

export const useAboutQuery = () => {
    return useQuery({
        queryKey: ['about'],
        queryFn: fetchAbout
    });
};