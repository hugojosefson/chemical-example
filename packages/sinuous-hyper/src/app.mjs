import {h, o, sample, cleanup} from './lib/sinuous.mjs'
import Image from './image.mjs'
import Greeting from './greeting.mjs'

export default () => {
  const counter = o(0)
  const timer = setInterval(() => counter(sample(counter) + 1), 1000)
  cleanup(() => clearInterval(timer))
  return h('main', [
    h(
      'a',
      {href: 'https://picsum.photos/'},
      h(Image, {
        src: 'https://picsum.photos/300/200?grayscale',
        title: 'images via https://picsum.photos/'
      })
    ),

    h(Greeting, {whom: counter}),
    h('p', 'Welcome. This is a short paragraph; others are not.'),

    h(Greeting, {whom: 'corporate ipsum', type: 'h2'}),
    h('p', h('i', 'poem from ', h('a', {href: 'https://www.cipsum.com/'}, 'cipsum.com'), '.')),
    h('p', 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'),
    h('p', 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'),
    h('div', counter)
  ])
}
