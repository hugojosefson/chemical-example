import h from 'https://unpkg.com/solid-js@0.18.9/dist/dom/h.js?module'

export default ({whom, type = 'h1'}) => h(
  type,
  {},
  `Hello, ${whom}!`
)
