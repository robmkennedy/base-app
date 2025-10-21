import { type ChangeEvent, useState } from 'react';
import { Button, Flex, Group, Text, TextInput } from '@mantine/core';
import { useSearchTerm } from '@features/challenge/hooks/useSearchTerm';
import { useSearchQuery } from '@features/challenge/api/useSearchQuery';
import { useTranslation } from 'react-i18next';

/**
 */
export function ChallengeSearch() {
    const [inputValue, setInputValue] = useState<string>('');
    const [searchTerm, setSearchTerm] = useSearchTerm();
    const { isSuccess, isPending, isError } = useSearchQuery({ searchTerm });

    const { t } = useTranslation();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
            setSearchTerm(inputValue);
    };

    return (
        <Flex direction='column' gap='lg'>
            <Group>
                <Text>{t('challenge.search.label')}</Text>
                <TextInput onChange={handleChange} value={inputValue} />
                <Button onClick={handleSearch}>{t('challenge.search.button')}</Button>
            </Group>
            <Group>
                {isError && <Text>An Error</Text>}
                {searchTerm && !isError && isPending && <Text>Loading...</Text>}
                {searchTerm && !isError && !isPending && isSuccess && <Text>Success!</Text>}
            </Group>
        </Flex>
    );
}
