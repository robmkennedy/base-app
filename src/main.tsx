import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from '@styles/theme';
import { router } from '@utils/routes';
import '@styles/main.css';
import '@i18n/i18n';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>
                <RouterProvider router={router} />
            </MantineProvider>
        </QueryClientProvider>
    </StrictMode>
);
