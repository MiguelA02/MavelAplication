import React from 'react'
import {Card} from './Card'
import {useSelector} from 'react-redux'
import s from '../Styles/CharacterList.module.css'

export const CharacterList = () => {

  let state = useSelector(state => state.characters)
 
  
  return (
    
    <div className={s.container}>
      {state.map(c => <Card key={c.id} id = {c.id} name={c.name} img={c.thumbnail.path} extencion={c.thumbnail.extension} ruta={'character'}/>)}
    </div>
  )
}
