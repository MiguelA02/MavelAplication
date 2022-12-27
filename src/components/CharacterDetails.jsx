import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as actions from '../redux/actions'
import s from '../Styles/CharacterDetail.module.css'
export const CharacterDetails = () => {
  let name = useParams()
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(actions.getCharacter(name.name))
  },[])

  let state = useSelector(state => state.characterDetails)
  return (
    <div className={s.container}>
      <div className={s.containerItems}>
      <div>
        <img src={`${state.thumbnail}.jpg`} alt="" className={s.img}/>
      </div>
      <div className={s.texts}>
        <h1>{state.name}</h1>
        <p>{state.description}</p>
      </div>
    </div>
    </div>
    
  )
}
