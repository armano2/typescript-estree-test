module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: [
    '<rootDir>/src/alignment.spec.ts',
    '<rootDir>/src/alignment-no-range.spec.ts',
    '<rootDir>/src/snapshot.spec.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: [
    '<rootDir>/projects/.*',
    '<rootDir>/node_modules/.*'
  ]
};
