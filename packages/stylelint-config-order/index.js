/**
 * @file stylelint-config-order
 * @see https://github.com/hudochenkov/stylelint-order
 * @see https://github.com/stormwarning/stylelint-config-recess-order
 */

function trbl(prefix) {
  prefix = prefix ? `${prefix}-` : ''

  return [
    ...(prefix ? [prefix.slice(0, -1)] : []),
    `${prefix}top`,
    `${prefix}right`,
    `${prefix}bottom`,
    `${prefix}left`,
  ]
}

function minMax(suffix) {
  return [suffix, `min-${suffix}`, `max-${suffix}`]
}

function border(infix) {
  infix = infix ? `-${infix}` : ''

  return [`border${infix}`, `border${infix}-width`, `border${infix}-style`, `border${infix}-color`]
}

const positioning = ['position', 'inset', 'inset-block', 'inset-inline', ...trbl(), 'z-index']

const flex = [
  'flex',
  'flex-align',
  'flex-basis',
  'flex-direction',
  'flex-wrap',
  'flex-flow',
  'flex-shrink',
  'flex-grow',
  'flex-order',
  'flex-pack',
  'order',
]

const grid = [
  'grid',
  'grid-area',
  'grid-template',
  'grid-template-areas',
  'grid-template-rows',
  'grid-template-columns',
  'grid-row',
  'grid-row-start',
  'grid-row-end',
  'grid-column',
  'grid-column-start',
  'grid-column-end',
  'grid-auto-rows',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-gap',
  'grid-row-gap',
  'grid-column-gap',
]

const gap = ['gap', 'row-gap', 'column-gap']

const align = [
  'place-content',
  'place-items',
  'place-self',
  'align-content',
  'align-items',
  'align-self',
  'justify-content',
  'justify-items',
  'justify-self',
]

const column = [
  'columns',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-width',
  'column-rule-style',
  'column-rule-color',
  'column-span',
  'column-width',
  'orphans',
]

const displayAndBoxModel = [
  'display',
  'float',
  'aspect-ratio',

  ...minMax('width'),
  ...minMax('height'),
  ...trbl('padding'),
  ...trbl('margin'),

  'background',
  'background-color',
  'background-image',
  'background-repeat',
  'background-attachment',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-clip',
  'background-origin',
  'background-size',
  'background-blend-mode',
  'isolation',

  ...border(),
  ...border('top'),
  ...border('right'),
  ...border('bottom'),
  ...border('left'),

  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-right-radius',
  'border-bottom-left-radius',

  'border-image',
  'border-image-source',
  'border-image-slice',
  'border-image-width',
  'border-image-outset',
  'border-image-repeat',

  'outline',
  'outline-width',
  'outline-style',
  'outline-color',
  'outline-offset',

  'box-sizing',
  'mix-blend-mode',
  '-ms-interpolation-mode',
]

const font = [
  'src',
  'unicode-range',
  'font-display',
  'hyphens',
  'text-align',
  'text-align-last',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-style',
  'text-emphasis-position',
  'text-decoration',
  'text-decoration-line',
  'text-decoration-thickness',
  'text-decoration-style',
  'text-decoration-color',
  'text-underline-position',
  'text-underline-offset',
  'text-indent',
  'text-justify',
  'text-outline',
  '-ms-text-overflow',
  'text-overflow',
  'text-overflow-ellipsis',
  'text-overflow-mode',
  'text-shadow',
  'text-transform',
  'text-wrap',
  'letter-spacing',
  'word-break',
  'word-spacing',
  'word-wrap', // Legacy name for `overflow-wrap`
  'overflow-wrap',
  'tab-size',
  'white-space',
  'vertical-align',
  'direction',
  'unicode-bidi',
  'line-height',
  'font',
  'font-family',
  'font-style',
  'font-weight',
  'font-size',
  'font-variant',
  'font-variant-ligatures',
  'font-variant-caps',
  'font-variant-alternates',
  'font-variant-numeric',
  'font-variant-east-asian',
  'font-variant-position',
  'font-variation-settings',
  'font-feature-settings',
  'font-optical-sizing',
  'font-size-adjust',
  'font-stretch',
  'font-effect',
  'font-kerning',
  'font-emphasize',
  'font-emphasize-position',
  'font-emphasize-style',
  'color',
  '-webkit-font-smoothing',
  '-moz-osx-font-smoothing',
  'font-smooth',
  '-webkit-text-size-adjust',
  '-ms-text-size-adjust',
  'size-adjust',
  'ascent-override',
  'descent-override',
  'line-gap-override',
]

const effect = [
  'box-shadow',
  'opacity',
  'filter',
  'clear',
  'clip',
  'clip-path',
  'overflow',
  'overflow-x',
  'overflow-y',
  '-webkit-overflow-scrolling',
  '-ms-overflow-x',
  '-ms-overflow-y',
  '-ms-overflow-style',
  'overscroll-behavior',
  'overscroll-behavior-x',
  'overscroll-behavior-y',
  'overscroll-behavior-inline',
  'overscroll-behavior-block',
]

const transformAndAnimation = [
  'transform',
  'transform-origin',
  'transform-box',
  'transform-style',

  'transition',
  'transition-delay',
  'transition-timing-function',
  'transition-duration',
  'transition-property',

  'animation',
  'animation-name',
  'animation-duration',
  'animation-play-state',
  'animation-timing-function',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',
  'animation-fill-mode',

  'rotate',
  'scale',
  'perspective',
  'appearance',
]

const table = ['table-layout', 'empty-cells', 'caption-side', 'border-spacing', 'border-collapse']

const visual = [
  'list-style',
  'list-style-position',
  'list-style-type',
  'list-style-image',
  'pointer-events',
  '-ms-touch-action',
  'touch-action',
  'will-change',
  'visibility',
  'cursor',
  'zoom',
  'quotes',
  'counter-reset',
  'counter-increment',
  'resize',
  'user-select',
  'overflow-anchor',
  'nav-index',
  'nav-up',
  'nav-right',
  'nav-down',
  'nav-left',
  'page-break-after',
  'page-break-before',
  'page-break-inside',

  'scroll-behavior',
  'scrollbar-color',
  'scrollbar-width',
  'scrollbar-gutter',
  'scroll-margin',
  'scroll-margin-block',
  'scroll-margin-block-start',
  'scroll-margin-block-end',
  'scroll-margin-inline',
  'scroll-margin-inline-start',
  'scroll-margin-inline-end',
  'scroll-margin-top',
  'scroll-margin-right',
  'scroll-margin-bottom',
  'scroll-margin-left',
  'scroll-padding',
  'scroll-padding-block',
  'scroll-padding-block-start',
  'scroll-padding-block-end',
  'scroll-padding-inline',
  'scroll-padding-inline-start',
  'scroll-padding-inline-end',
  'scroll-padding-top',
  'scroll-padding-right',
  'scroll-padding-bottom',
  'scroll-padding-left',
  'scroll-snap-type',
  'scroll-snap-align',
  'scroll-snap-stop',

  'content-visibility',
  'contain-intrinsic-size',
  'contain-intrinsic-width',
  'contain-intrinsic-height',
  'contain-intrinsic-inline-size',
  'contain-intrinsic-block-size',
  'speak',
  'speak-as',
]

const svg = [
  'alignment-baseline',
  'baseline-shift',
  'dominant-baseline',
  'text-anchor',
  'word-spacing',
  'writing-mode',

  'fill',
  'fill-opacity',
  'fill-rule',
  'stroke',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',

  'color-interpolation',
  'color-interpolation-filters',
  'color-profile',
  'color-rendering',
  'flood-color',
  'flood-opacity',
  'image-rendering',
  'lighting-color',
  'marker-start',
  'marker-mid',
  'marker-end',
  'mask',
  'shape-rendering',
  'stop-color',
  'stop-opacity',
]

const atRules = [
  {
    type: 'at-rule',
    name: 'include',
    parameter: 'bg-style',
  },
  {
    type: 'at-rule',
    name: 'include',
    parameter: 'bg',
  },
  {
    type: 'at-rule',
    name: 'include',
    parameter: 'clearfix',
  },
  {
    type: 'at-rule',
    name: 'include',
    parameter: 'trs',
  },
  {
    type: 'at-rule',
    name: 'include',
    parameter: 'ellipsis',
  },
  {
    type: 'at-rule',
    name: 'include',
    parameter: 'ellipsis-y',
  },
  {
    type: 'at-rule',
    name: 'include',
    parameter: 'hover-active',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'include',
    parameter: 'when',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'include',
    parameter: 'has',
    hasBlock: true,
  },
]

/**
 * @type {import('stylelint').Config}
 */
const config = {
  plugins: ['stylelint-order'],

  rules: {
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        'at-variables',
        'declarations',
        // 'at-rules',
        ...atRules,
        'less-mixins',
        'rules',
      ],
      {
        unspecified: 'ignore',
      },
    ],

    'order/properties-order': [
      [
        'content',
        ...positioning,
        ...flex,
        ...grid,
        ...align,
        ...gap,
        ...column,
        ...displayAndBoxModel,
        ...font,
        ...effect,
        ...table,
        ...transformAndAnimation,
        ...visual,
        ...svg,
      ],
      { unspecified: 'bottomAlphabetical' },
    ],
  },
}

module.exports = config
