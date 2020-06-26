import {h} from './lib/sinuous.mjs'

export default ({whom, type = 'h1'}) => h(type, `Hello, `, whom, `!`)
