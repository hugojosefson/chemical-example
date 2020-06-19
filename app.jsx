/** @jsx h */
import h from 'solid-js/h'

import Image from './image.jsx'
import Greeting from './greeting.jsx'

export default () => (
  <main>
    <a href={'https://picsum.photos/'}>
      <Image src={'https://picsum.photos/300/200?grayscale'}
             title={'images via https://picsum.photos/'}/>
    </a>
    <h1><Greeting whom={'you'}/></h1>
    <p>Welcome. This is a short paragraph; others are not.</p>
    <h2><Greeting whom={'corporate ipsum'}/></h2>
    <i>poem from <a href={'https://www.cipsum.com/'}>cipsum.com</a></i>
    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
  </main>
)
