import React from 'react'

const hoc = (Bodycomponent) => {
  const newProps = { hellow: 'hellow' }
  return class extends Bodycomponent {
    componentDidMount () {
      console.log(this.instanceComponent.state, 'instanceComponent')
    }

    render () {
      return (
        <Bodycomponent
          {...this.props}
          {...newProps}
          ref={(instanceComponent) => { 
            this.instanceComponent = instanceComponent
            return this.instanceComponent 
          }}
        />
      ) 
    }
  }
}
export default hoc
