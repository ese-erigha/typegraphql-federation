module.exports = {
  roots: ['<rootDir>'],
  modulePathIgnorePatterns: ['<rootDir>/test/__fixtures__', '<rootDir>/node_modules', '<rootDir>/dist'],
  clearMocks: true,
  globals: {
    __DEV__: true,
  },
  preset: 'ts-jest',
  // testEnvironment: 'node',
  testMatch: ['**/*.test.[jt]s?(x)'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
};
