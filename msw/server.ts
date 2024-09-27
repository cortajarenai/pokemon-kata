import { setupServer } from 'msw/node';

const handlers: any[] = [];

const server = setupServer(...handlers);

export { server };
