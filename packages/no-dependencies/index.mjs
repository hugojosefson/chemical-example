import { renderDom, mount } from './chemical.mjs'
import app from './app.mjs'

const element = window.document.getElementById('app')
mount(element, renderDom(app()))
