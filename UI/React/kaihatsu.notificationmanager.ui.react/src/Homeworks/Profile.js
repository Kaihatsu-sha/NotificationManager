import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setName, toggleAgreement } from '../store/ProfileReducer'

export default function Profile() {
  const name = useSelector((state) => state.profile.name);
  const isAgreed  = useSelector((state) => state.profile.isAgreed);

  const dispatch = useDispatch()

  return (
    <div>
      <div><h3>Профиль</h3></div>
      <div>
        <input value={name} disabled="disabled"></input>
        <input type="checkbox" checked={isAgreed} onChange={()=> dispatch(toggleAgreement())}></input>
      </div>
    </div>
  )
};