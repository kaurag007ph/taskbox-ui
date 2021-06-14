import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import del from 'rollup-plugin-delete';

// import pkg from './package.json';

export default [
  {
    input: 'components/index.ts',
    output: [
      {
        file: "dist/index.js",
        format: 'esm',
        banner: '/* eslint-disable */',
      },
      { file: 'dist/index.cjs.js', format: 'cjs' },
      { file: 'dist/index.esm.js', format: 'esm' },
    ],
    plugins: [
      del({ targets: ['dist/*'] }),
      typescript(),
      commonjs({
        include: /node_modules/
      })
    ],
    external: ['react', 'react-dom', 'prop-types', 'styled-components'],
  },
];