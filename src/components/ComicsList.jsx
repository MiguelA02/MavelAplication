import React from 'react'
import {Card} from './Card'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import * as actions from '../redux/actions'
import s from '../Styles/CharacterList.module.css'

export const ComicsList = () => {
  let state = useSelector(state => state.comics)
  const dispacth = useDispatch()
  useEffect(() => {
    dispacth(actions.getComics)
  },[])
  return (
    <div className={s.container}>
      {state.map(c => <Card key= {c.id} id = {c.id} name={c.title} img={c.thumbnail.path} extencion = {c.thumbnail.extension} ruta = {'comics'}/>)}
    </div>
  )
}
