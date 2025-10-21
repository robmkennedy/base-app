import { Group } from '@mantine/core';
import { HeaderNav } from '@common/components/Header/HeaderNav/HeaderNav';
import { HeaderLogo } from '@common/components/Header/HeaderLogo/HeaderLogo';

export function Header() {
    return (
        <Group justify='space-between' flex={1}>
            <HeaderLogo />
            <HeaderNav />
        </Group>
    );
}
