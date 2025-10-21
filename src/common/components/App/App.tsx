import { Outlet } from 'react-router';
import { AppShell, Group } from '@mantine/core';
import { Header } from '@common/components/Header/Header';

export function App() {
    return (
        <AppShell header={{ height: 60 }} padding='xl'>
            <AppShell.Header>
                <Group h='100%' px='xl'>
                    <Header />
                </Group>
            </AppShell.Header>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}
