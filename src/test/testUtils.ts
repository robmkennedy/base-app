import { type ReactNode } from 'react';
import { render as testingLibraryRender, type RenderOptions } from '@testing-library/react';
import { TestWrapper } from '@test/TestWrapper';

export const customRender = (ui: ReactNode, options?: RenderOptions) =>
    testingLibraryRender(ui, { wrapper: TestWrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
