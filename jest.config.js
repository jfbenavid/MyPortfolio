/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    '**/*.test.(ts|tsx)'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
  // moduleNameMapper: {
  //   hooks: '<rootDir>/src/util/hooks/index.ts'
  // },
  // globals: {
  //   'ts-jest': {
  //     tsconfig: './tsconfig.json'
  //   }
  // }
}
