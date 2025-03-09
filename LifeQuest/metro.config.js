const { getDefaultConfig } = require('@react-native/metro-config');

const config = getDefaultConfig(__dirname);

// Add critical fixes for the "handle" error
config.server = {
  ...config.server,
  enhanceMiddleware: (middleware) => {
    return (req, res, next) => {
      // Workaround for broken `connect` middleware in React Native < 0.73
      if (typeof req === 'undefined' || typeof res === 'undefined' || typeof next === 'undefined') {
        return;
      }
      return middleware(req, res, next);
    };
  },
};

// Ensure all file extensions are recognized
config.resolver.sourceExts = [
  'js',
  'jsx',
  'json',
  'ts',
  'tsx',
  'cjs'
];

module.exports = config;