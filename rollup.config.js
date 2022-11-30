import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'

import { readFileSync } from 'fs'

const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8'),
)

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [typescript({ objectHashIgnoreUnknownHack: true }), json()],
  external: ['react', 'react-dom'],
}
