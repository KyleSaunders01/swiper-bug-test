export default {
    mount: {
      public: '/',
      src: '/dist',
    },
    plugins: [
      '@snowpack/plugin-typescript',
      '@snowpack/plugin-postcss',
    ],
    devOptions: {
      open: 'default',
      port: 3000,
    },
    external: ["react", "react-dom"],
  };
  