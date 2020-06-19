/** @jsx h */
import h from 'solid-js/h'
import { render } from 'solid-js/dom'
import App from './app.jsx'

render(
  () => <App id={'app'} />,
  document.getElementById('app')
);
