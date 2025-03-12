/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}],
  },
  testMatch: ['**/__test__/**/*.test.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/__test__/$1',
    '@domain/(.*)$': '<rootDir>/src/domain/$1',
    '@infra/(.*)$': '<rootDir>/src/infra/$1',
    '@usecase/(.*)$': '<rootDir>/src/usecase/$1',
    '@presentation/(.*)$': '<rootDir>/src/presentation/$1',
    '@shared/(.*)$': '<rootDir>/src/shared/$1',
  },
  preset: 'ts-jest',
};
