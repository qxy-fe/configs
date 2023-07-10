import { describe, expect, it } from 'vitest'
import { config, defineConfig } from '../../packages/prettier-config'

describe('defineConfig', () => {
  it('should equal', () => {
    expect(defineConfig(config)).toBe(config)
  })
})
