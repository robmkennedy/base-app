import type { PropsWithChildren } from 'react';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from '@/styles/theme.ts';
import '@styles/main.css';
import '@i18n/i18n';

const queryClient = new QueryClient();

export function TestWrapper({ children }: PropsWithChildren) {
    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme} env='test'>
                {children}
            </MantineProvider>
        </QueryClientProvider>
    );
}
