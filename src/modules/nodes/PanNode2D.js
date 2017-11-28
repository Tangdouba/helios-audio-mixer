/*

  Pan Node (2D - left/right)

*/

class PanNode2D {
  constructor(params){
    let ctx = params.context

    // the name of this function is the same for
    // both prefixed and unprefixed audio contexts
    this.node = ctx.createPanner()

    // additional setup here
  }

  connect(to){
    this.node.connect(to)
  }
}

export default PanNode2D