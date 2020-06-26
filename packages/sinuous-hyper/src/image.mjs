import {h} from './lib/sinuous.mjs'

export default ({src, width = 300, height = 200, title}) =>
  h('img', {src, width, height, title})
