const axios = {
  create: jest.fn(() => ({
    getUri: jest.fn(() => 'http://localhost:3000'),
    request: jest.fn(),
    get: jest.fn(),
    delete: jest.fn(),
    head: jest.fn(),
    options: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
  })),
}

export default axios
