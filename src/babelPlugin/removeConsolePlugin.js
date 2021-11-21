module.exports = ({types: t})=> {
  return {
    visitor: {
      CallExpression(path) {
        const {callee} = path.node
        if(t.isMemberExpression(callee) 
            && callee.object.name === 'console' 
            && callee.property.name === 'log'
            && process.env.NODE_ENV === 'production') {
          path.remove()
        }
      }
    }
  }
}