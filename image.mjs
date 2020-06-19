import h from 'https://unpkg.com/solid-js@0.18.9/dist/dom/h.js?module'

export default ({src, width = 300, height = 200, title}) => h('img', {src, width, height, title})
