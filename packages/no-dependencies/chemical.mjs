export const renderDom = component => {
  if (typeof component === 'string') {
    return document.createTextNode(component)
  }

  if (typeof component === 'object') {
    const {type, children = [], attributes = {}} = component

    const node = document.createElement(type)
    children.map(renderDom).forEach(node.appendChild.bind(node))
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value))

    return node
  }

  throw new Error(`typeof component not supported: ${typeof component}`)
}

export const mount = (element, node) => element.replaceWith(node)
