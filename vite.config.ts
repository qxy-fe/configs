/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'

export const resolve = (...args: string[]) => path.resolve(__dirname, ...args)

export default defineConfig({
  resolve: {},
  test: {},
})
