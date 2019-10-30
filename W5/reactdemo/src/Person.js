import React from 'react'
import { tsPropertySignature } from '@babel/types'

const Person = (props) =>{
  return(
    <div>
      {props.name}
    </div>
  )
}

export default Person