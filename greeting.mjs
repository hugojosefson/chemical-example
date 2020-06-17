import h from './h.mjs'

export default ({whom, type = 'h1'}) => h(
  type,
  {},
  `Hello, ${whom}!`
)
