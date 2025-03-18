module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const isTest = api.env('test');
  const isDevelopment = api.env('development');
  const isServe = process.env.WEBPACK_SERVE;

  let presetEnv = ['@babel/preset-env'];
  const jestPreset = { targets: { node: 'current' } };

  if (isTest) {
    presetEnv.push(jestPreset);
  }

  return {
    sourceType: 'unambiguous',
    presets: [
      presetEnv,
      [
        '@babel/preset-react',
        { runtime: 'automatic', development: isDevelopment || isTest },
      ],
      '@babel/preset-typescript',
    ].filter(Boolean),
    plugins: [
      ['@babel/plugin-transform-runtime'],
      isServe && ['react-refresh/babel'],
    ].filter(Boolean),
  };
};
