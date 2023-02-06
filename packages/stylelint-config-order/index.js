/**
 * Stylelint config with order
 *
 * @see https://github.com/hudochenkov/stylelint-order
 */

'use strict'

function trbl(prefix) {
  prefix = prefix ? `${prefix}-` : ``

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
  infix = infix ? `-${infix}` : ``

  return [
    `border${infix}`,
    `border${infix}-width`,
    `border${infix}-style`,
    `border${infix}-color`,
  ]
}

const positioning = [`position`]
  .concat(trbl())
  .concat([`z-index`])

const flex = [
  `flex`,
  `flex-align`,
  `flex-basis`,
  `flex-direction`,
  `flex-wrap`,
  `flex-flow`,
  `flex-shrink`,
  `flex-grow`,
  `flex-order`,
  `flex-pack`,
  `align-content`,
  `align-items`,
  `align-self`,
  `justify-content`,
  `order`,
]

// TODO: add grid rules
const grid = [

]

const column = [
  `columns`,
  `column-count`,
  `column-fill`,
  `column-gap`,
  `column-rule`,
  `column-rule-width`,
  `column-rule-style`,
  `column-rule-color`,
  `column-span`,
  `column-width`,
  `orphans`,
]

const displayAndBoxModel = []
  .concat([
    `display`,
    `float`,
  ])
  .concat(minMax(`width`))
  .concat(minMax(`height`))
  .concat(trbl(`padding`))
  .concat(trbl(`margin`))
  .concat([
    `background`,
    `background-color`,
    `background-image`,
    `background-repeat`,
    `background-attachment`,
    `background-position`,
    `background-position-x`,
    `background-position-y`,
    `background-clip`,
    `background-origin`,
    `background-size`,
  ])
  .concat(border())
  .concat(border(`top`))
  .concat(border(`right`))
  .concat(border(`bottom`))
  .concat(border(`left`))
  .concat([
    `border-radius`,
    `border-top-left-radius`,
    `border-top-right-radius`,
    `border-bottom-right-radius`,
    `border-bottom-left-radius`,
  ])
  .concat([
    `border-image`,
    `border-image-source`,
    `border-image-slice`,
    `border-image-width`,
    `border-image-outset`,
    `border-image-repeat`,
  ])
  .concat([
    `outline`,
    `outline-width`,
    `outline-style`,
    `outline-color`,
    `outline-offset`,
  ])
  .concat([
    `box-sizing`,
  ])

const font = [
  `src`,
  `hyphens`,
  `text-align`,
  `text-align-last`,
  `text-emphasis`,
  `text-emphasis-color`,
  `text-emphasis-style`,
  `text-emphasis-position`,
  `text-decoration`,
  `text-indent`,
  `text-justify`,
  `text-outline`,
  `text-overflow`,
  `text-overflow-ellipsis`,
  `text-overflow-mode`,
  `text-shadow`,
  `text-transform`,
  `text-wrap`,
  `letter-spacing`,
  `word-break`,
  `word-spacing`,
  `word-wrap`,
  `overflow-wrap`,
  `tab-size`,
  `white-space`,
  `vertical-align`,
  `direction`,
  `unicode-bidi`,
  `line-height`,
  `font`,
  `font-family`,
  `font-style`,
  `font-weight`,
  `font-size`,
  `font-variant`,
  `font-size-adjust`,
  `font-stretch`,
  `font-effect`,
  `font-emphasize`,
  `font-emphasize-position`,
  `font-emphasize-style`,
  `font-smooth`,
  `color`,
]

const effect = [
  `box-shadow`,
  `opacity`,
  `filter`,
  `clear`,
  `overflow`,
  `overflow-x`,
  `overflow-y`,
]

const transformAndAnimation = [
  `transform`,
  `transform-origin`,
  `transition`,
  `transition-delay`,
  `transition-timing-function`,
  `transition-duration`,
  `transition-property`,
  `perspective`,
  `appearance`,
  `animation`,
  `animation-name`,
  `animation-duration`,
  `animation-play-state`,
  `animation-timing-function`,
  `animation-delay`,
  `animation-iteration-count`,
  `animation-direction`,
  `animation-fill-mode`,
]

const table = [
  `table-layout`,
  `empty-cells`,
  `caption-side`,
  `border-spacing`,
  `border-collapse`,
]

const visual = [
  `list-style`,
  `list-style-position`,
  `list-style-type`,
  `list-style-image`,
  `pointer-events`,
  `touch-action`,
  `visibility`,
  `cursor`,
  `zoom`,
  `quotes`,
  `counter-reset`,
  `counter-increment`,
  `resize`,
  `user-select`,
  `nav-index`,
  `nav-up`,
  `nav-right`,
  `nav-down`,
  `nav-left`,
  `page-break-after`,
  `page-break-before`,
  `page-break-inside`,
]

const svg = [
  `fill`,
  `stroke`,
]

const atRules = [
  {
    type: `at-rule`,
    name: `include`,
    parameter: `bg-style`,
  },
  {
    type: `at-rule`,
    name: `include`,
    parameter: `bg`,
  },
  {
    type: `at-rule`,
    name: `include`,
    parameter: `clearfix`,
  },
  {
    type: `at-rule`,
    name: `include`,
    parameter: `trs`,
  },
  {
    type: `at-rule`,
    name: `include`,
    parameter: `ellipsis`,
  },
  {
    type: `at-rule`,
    name: `include`,
    parameter: `ellipsis-y`,
  },
  {
    type: `at-rule`,
    name: `include`,
    parameter: `hover-active`,
    hasBlock: true,
  },
  {
    type: `at-rule`,
    name: `include`,
    parameter: `when`,
    hasBlock: true,
  },
  {
    type: `at-rule`,
    name: `include`,
    parameter: `has`,
    hasBlock: true,
  },
]

module.exports = {
  plugins: [
    `stylelint-order`,
  ],

  rules: {
    'order/order': [
      [
        `custom-properties`,
        `dollar-variables`,
        `at-variables`,
        `declarations`,
        // 'at-rules',
        ...atRules,
        `less-mixins`,
        `rules`,
      ],
      {
        unspecified: `ignore`,
      },
    ],

    'order/properties-order': [
      [`content`]
        .concat(positioning)
        .concat(flex)
        .concat(grid)
        .concat(column)
        .concat(displayAndBoxModel)
        .concat(font)
        .concat(effect)
        .concat(table)
        .concat(transformAndAnimation)
        .concat(visual)
        .concat(svg),
      { unspecified: `bottomAlphabetical` },
    ],
  },
}
