import type { Config } from 'prettier'

/**
 * Define Prettier config
 *
 * @param config Prettier config
 * @returns Prettier config
 */
declare function defineConfig(config: Config): Config

declare const config: Config

export { defineConfig, config, config as default }
