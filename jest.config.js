/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    '**/*.test.(ts|tsx)'
  ],
  moduleNameMapper: {
    '^hooks/(.*)$': '<rootDir>/src/util/hooks/$1'
  }
  // globals: {
  //   'ts-jest': {
  //     tsconfig: './tsconfig.json'
  //   }
  // }
}
