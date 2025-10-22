import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { server } from './node.js';

// Start MSW before all tests
beforeAll(() => {
    server.listen();
});

// Runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
    server.resetHandlers();
});

// Stop MSW after all tests
afterAll(() => {
    server.close()
});

// Mock matchMedia and ResizeObserver APIs as they are required by mantine but not in jsdom
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn()
    }))
});

class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

window.ResizeObserver = ResizeObserver;
