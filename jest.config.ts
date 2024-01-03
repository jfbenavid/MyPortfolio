export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/*.test.(ts|tsx)'
  ],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { autoMapModuleNames: true }]
  },
  moduleNameMapper: {
    "^hooks$": "<rootDir>/src/util/hooks"
  },
  moduleDirectories: [
    'node_modules',
    'src',
    'src/util/hooks'
  ]
}
