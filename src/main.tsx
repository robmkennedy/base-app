import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { MantineProvider } from '@mantine/core';

import { store } from '@state/store';
import { theme } from '@styles/theme';
import { router } from '@utils/routing/routes';
import '@styles/main.css';
import '@i18n/i18n';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <MantineProvider theme={theme}>
                <RouterProvider router={router} />
            </MantineProvider>
        </Provider>
    </StrictMode>
);
