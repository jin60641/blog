module.exports = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: 'coverage',

  coverageThreshold: {
    './src': {
      'branches': 100,
      'functions': 100,
      'lines': 100,
      'statements': 100,
    },
  },

  moduleNameMapper: {
   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|scss)$': 'identity-obj-proxy',
  },

  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],

  setupTestFrameworkScriptFile: '<rootDir>/test/config.js',

  testEnvironment: 'jsdom',

  testMatch: [
    '<rootDir>/src/**/*.test.js',
  ],

  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },

  globals: {
    __PATH_PREFIX__: '',
  },

  testURL: 'http://localhost',

  watchman: true,

  setupFiles: ['<rootDir>/loadershim.js'],
};
