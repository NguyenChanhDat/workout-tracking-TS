/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node',
  // transform: {
  //   '^.+\\.tsx?$': ['ts-jest', {}],
  // },
  testMatch: ['<rootDir>/dist/__test__/**/*.test.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/dist/src/$1',
    '^@test/(.*)$': '<rootDir>/dist/__test__/$1',
    '@domain/(.*)$': '<rootDir>/dist/src/domain/$1',
    '@infra/(.*)$': '<rootDir>/dist/src/infra/$1',
    '@usecase/(.*)$': '<rootDir>/dist/src/usecase/$1',
    '@presentation/(.*)$': '<rootDir>/dist/src/presentation/$1',
    '@shared/(.*)$': '<rootDir>/dist/src/shared/$1',
  }
};
