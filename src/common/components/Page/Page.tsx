import type { PropsWithChildren } from 'react';
import { Box } from '@mantine/core';

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function Page({ children }: PropsWithChildren) {

    return <Box h='100%'>{children}</Box>;
}
