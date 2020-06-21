/** @jsx h */
import h from 'solid-js/h'

export default ({src, width = 300, height = 200, title=alt, alt=title}) => (
  <img src={src} width={width} height={height} alt={alt} title={title}/>)
