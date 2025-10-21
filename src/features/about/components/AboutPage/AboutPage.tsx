import { Page } from '@/common/components/Page/Page';
import { useTranslation } from 'react-i18next';

/**
 * The About page of the application.
 */
export function AboutPage() {
    const { t } = useTranslation();

    return (
        <Page>
            {t('about.description')}
        </Page>
    );
}
