import { Config } from 'jest'

const config: Config = {
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: ['./src/**/*.(t|j)s', './src/**/*.(ts|js)x'],
  coveragePathIgnorePatterns: [
    './src/styles/',
    './src/app/layout.tsx',
    './src/@types/',
    './src/lib/testing.tsx',
    './src/store/index.ts',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',
    'next/font/(.*)': 'next/dist/build/jest/__mocks__/nextFontMock.js',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/store/(.*)$': '<rootDir>/src/store/$1',
    '^@/__tests__/(.*)$': '<rootDir>/__tests__/$1',
    '^@/__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/__tests__/jest.setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/__tests__/jest.setup.ts',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}

export default config
