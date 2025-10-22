import { Provider } from 'react-redux';
import type { PropsWithChildren } from 'react';
import { MantineProvider } from '@mantine/core';

import { store } from '@state/store';
import { theme } from '@/styles/theme.ts';
import '@styles/main.css';
import '@i18n/i18n';

export function TestWrapper({ children }: PropsWithChildren) {
    return (
        <Provider store={store}>
            <MantineProvider theme={theme} env='test'>
                {children}
            </MantineProvider>
        </Provider>
    );
}
