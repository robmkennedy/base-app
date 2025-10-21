import { Group, Image } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import logo from '@assets/images/logo.svg';

export function HeaderLogo() {
    const { t } = useTranslation();

    return (
        <Group gap='lg'>
            <Image w='40' fit='contain' src={logo} />
            <div>{t('app.header.title')}</div>
        </Group>
    );
}
