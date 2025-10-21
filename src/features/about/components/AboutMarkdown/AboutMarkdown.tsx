import Markdown from 'react-markdown';
import { Container } from '@mantine/core';
import { Notice } from '~shared/components/Notice/Notice';
import { Loader } from '~shared/components/Loader/Loader';
import { useAboutQuery } from '~features/about/api/useAboutQuery';
import { t } from 'i18next';

/**
 * The home page of the application. It presents a search bar to the user allowing
 * them to search for a particular movie based on title. IF a movie is found, the poster
 * and detail information for the movie is displayed beneath the search bar.
 */
export function AboutMarkdown() {
    const { data, isSuccess, isPending, isError } = useAboutQuery();

    return (
        <Container mt='lg' size='xl'>
            {isError && <Notice message={t('about.markdown.error')} />}
            {!isError && isPending && <Loader message={t('about.markdown.loading')} />}
            {!isError && !isPending && isSuccess && <Markdown>{data}</Markdown>}
        </Container>
    );
}
