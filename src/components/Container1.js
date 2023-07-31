import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addIceCream, buyIceCream } from '../redux/iceCream/actions'

function Container1() {
    const iceCreams = useSelector(state => state.ice.noOfIceCreams)
    const call1 = useDispatch()
  return (
    
    <div>
      <h3>ICE Creams left {iceCreams}</h3>
      <button onClick={()=>{
        call1(buyIceCream())
      }}>Buy Ice Cream</button>
      <button onClick={()=>{
        call1(addIceCream())
      }}>Add Ice Cream</button>
    </div>
  )
}

export default Container1
