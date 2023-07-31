import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import {buyCake, addCake} from '../redux/cake/Action'

function Container2() {
  const cakes = useSelector(state => state.cake.noOfCakes)
  const dispatch = useDispatch()
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h3>Cakes Left {cakes}</h3>
      <input type="text" value={number} onChange={(e)=> setNumber(e.target.value)}/>
      <button onClick={()=>{
        dispatch(buyCake(number))
      }}>Buy cake</button>
    </div>
  )
}

export default Container2
