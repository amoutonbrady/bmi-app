import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'
import { minify } from 'uglify-es'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import precss from 'precss'
import imp from 'postcss-import'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
    name: 'app'
  },
  watch: {
    include: 'src/**/**',
    exclude: 'node_modules/**'
  },
  plugins: [
    resolve({
      module: false,
      main: true
    }),
    cjs(),
    postcss({
      plugins: [imp(), precss(), autoprefixer(), cssnano()],
      sourceMap: true,
      extract: true
    }),
    babel({
      sourceMaps: true,
      exclude: 'node_modules/**'
    }),
    uglify({}, minify)
  ]
}
