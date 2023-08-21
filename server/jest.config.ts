import { Config } from 'jest'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const config: Config = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
  collectCoverageFrom: ['./src/**/*.(t|j)s'],
  coveragePathIgnorePatterns: [
    './src/application/repositories/',
    '.module.ts',
    'main.ts',
    'prisma.service.ts',
  ],
  coverageDirectory: './coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
}

export default config
