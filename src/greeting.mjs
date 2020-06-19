import {h} from './lib/solid-js.mjs'

export default ({whom, type = 'h1'}) => h(
  type,
  {},
  `Hello, ${whom}!`
)
