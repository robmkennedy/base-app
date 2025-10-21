import { createBrowserRouter, Navigate } from 'react-router';
import { App } from '@common/components/App/App';
import { AboutPage } from '@features/about/components/AboutPage/AboutPage';
import { ChallengePage } from '@features/challenge/components/ChallengePage/ChallengePage';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: App,
            children: [
                { index: true, element: <Navigate to='/challenge' /> },
                { path: '/about', Component: AboutPage },
                { path: '/challenge', Component: ChallengePage },
                { path: '/*', element: <Navigate to='/challenge' /> }
            ]
        }
    ],
    { basename: import.meta.env.BASE_URL }
);
