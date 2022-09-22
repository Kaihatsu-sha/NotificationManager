import { useSelector, useDispatch } from 'react-redux'
import { setName, toggleAgreement } from '../store/Profile/Reducer'

export default function Profile() {
  const name = 'defaultProfile';//useSelector((state) => state.profile.name);
  const isAgreed  = false;//useSelector((state) => state.profile.isAgreed);

  //const dispatch = useDispatch()

  return (
    <div>
      <div><h3>Профиль</h3></div>
      <div>
        <input value={name} disabled="disabled"></input>
        <input type="checkbox" checked={isAgreed} onChange={()=> console.log(1)//dispatch(toggleAgreement())
        }></input>
      </div>
    </div>
  )
};

export function ProfileProps({name=''}) {

  //const dispatch = useDispatch()

  return (
    <div>
      <div><h3>Профиль</h3></div>
      <div>{name}
      </div>
    </div>
  )
};