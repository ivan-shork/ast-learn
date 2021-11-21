module.exports = ({types: t})=> {
  return {
    visitor: {
      ArrowFunctionExpression(path) {
        let {id, params, body} = path.node
        params = params.filter(param=>                  
          path.scope.bindings[param.name].referenced
        )        
        const node = t.FunctionExpression(id, params, body)
        path.replaceWith(node)
      }
    }
  }
}