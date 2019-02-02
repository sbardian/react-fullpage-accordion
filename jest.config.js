module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
  },
  testPathIgnorePatterns: ['/node_modules/'],
};
