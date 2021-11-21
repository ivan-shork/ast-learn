module.exports = ({types: t})=> {
  return {
    visitor: {
      MemberExpression(path) {
        // 要有process.env
        if(path.get('object').matchesPattern('process.env')) {
          const key = path.toComputedKey()
          if(t.isStringLiteral(key)) {
            path.replaceWith(t.valueToNode(process.env[key.value]))
          }
        }
        
      }
    }
  }
}