export type SearchQuery = {
    searchTerm: string;
};

export type SearchResult = {
    Response: string;
    totalResults: string;
    Search: SearchResultItem[];
    Error?: string;
};

export type SearchResultItem = {
    Title: string;
    Type: string;
    Year: string;
    Poster: string;
    imdbID: string;
};