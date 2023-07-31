import React, { useCallback } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import {buyCake, addCake} from '../redux/cake/Action'

function Continaer() {
    const cakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h3>Cakes Left {cakes}</h3>
      <button onClick={()=>{
        dispatch(buyCake())
      }}>Buy cake</button>
      <button onClick={()=>{
        dispatch(addCake())
      }}>Add Cake</button>
    </div>
  )
}

export default Continaer
