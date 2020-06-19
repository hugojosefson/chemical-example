import h from './lib/solid-js-h.mjs'

export default ({whom, type = 'h1'}) => h(
  type,
  {},
  `Hello, ${whom}!`
)
