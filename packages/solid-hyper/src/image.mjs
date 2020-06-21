import html from './lib/solid-js-html.mjs'

export default ({src, width = 300, height = 200, title}) => html`<img src="${src}" width="${width}" height="${height}" title="${title}"/>`
