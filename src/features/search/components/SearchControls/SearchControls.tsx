import { type ChangeEvent, type ReactNode, useState } from 'react';
import { Button, Flex, Group, Text, TextInput } from '@mantine/core';
import { termSearched } from '@features/search/state/searchSlice';
import { useGetSearchResultsQuery } from '@features/search/state/searchApiSlice';
import { useAppSelector } from '@common/hooks/useAppSelector';
import { useAppDispatch } from '@common/hooks/useAppDispatch';
import { useTranslation } from 'react-i18next';

/**
 */
export function SearchControls() {
    const [inputValue, setInputValue] = useState<string>('');
    const searchTerm = useAppSelector((state) => state.search.searchTerm);
    const { data, isSuccess, isLoading, isError } = useGetSearchResultsQuery(searchTerm, { skip: !searchTerm });
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        dispatch(termSearched(inputValue));
    };

    let status: string | null = null;
    let dataList: ReactNode | null = null;

    // error
    if (isError) {
        status = t('app.common.error');
    } // ok
    else if (searchTerm) {
        status = isLoading ? t('app.common.loading') : isSuccess ? t('app.common.success') : null;

        if (data) {
            if (data.length === 0) {
                dataList = <Text>{t('app.common.empty')}</Text>;
            } else {
                dataList = data.map((item) => {
                    return <Text>{`${item.fullName} (${item.birthdate})`}</Text>;
                });
            }
        }
    }

    return (
        <Flex direction='column' gap='lg'>
            <Group>
                <Text>{t('search.label')}</Text>
                <TextInput onChange={handleChange} value={inputValue} />
                <Button onClick={handleSearch} disabled={!inputValue}>
                    {t('search.button')}
                </Button>
            </Group>
            <Flex direction='column' gap='lg'>
                {status && <Text>{status}</Text>}
                {dataList}
            </Flex>
        </Flex>
    );
}
