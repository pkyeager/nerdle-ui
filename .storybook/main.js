module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/addon-interactions'
    ],
    framework: {
      name: '@storybook/html-webpack5',
      options: {}
    },
    docs: {
      autodocs: true
    },
    viteFinal: async (config) => {
      config.base = process.env.NODE_ENV === 'production' ? '/nerdle-ui/' : '/';
      return config;
    }
  }; 