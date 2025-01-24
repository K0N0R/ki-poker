// @ts-nocheck
import * as esbuild from 'esbuild'
import fs from 'node:fs/promises'
import { existsSync } from 'node:fs'


if (existsSync('./dist')) {
  await fs.rm('./dist', { recursive: true, })
}
await fs.cp('./static', './dist', { recursive: true })


const config = {
  entryPoints: ['src/index.tsx'],
  entryNames: '[name]',
  format: 'esm',
  splitting: true,
  outbase: '.',
  outdir: 'dist',
  minify: process.env.PROD ? true : false,
  sourcemap: process.env.PROD ? false : true,
  bundle: true,
  define: { DEBUG: process.env.PROD ? 'false' : 'true' }
}

if (process.env.WATCH) {

  const ctx = await esbuild.context(config)

  await ctx.watch()
  console.log('watching...')


  let { host, port } = await ctx.serve({
    host: 'localhost',
    servedir: 'dist',
  })
  console.log(`http://${host}:${port}/`)
} else {
  await esbuild.build(config)
  console.log('done')
}