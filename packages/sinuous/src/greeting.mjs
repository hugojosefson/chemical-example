import {html} from './lib/sinuous.mjs'

export default ({whom, type = 'h1'}) => html`<${type}>Hello, ${whom}!<//>`
