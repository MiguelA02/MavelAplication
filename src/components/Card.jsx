import React from "react";
import s from "../Styles/Card.module.css";
import { useNavigate } from "react-router-dom";
export const Card = (props) => {
  const navigate = useNavigate();
  let codigo = ''
  if(props.ruta == 'comics'){
    codigo = props.id
  }else{
    codigo = props.name
  }
  return (
      <div className={s.card} onClick={() => navigate(`/${props.ruta}/${codigo}`)}>
        <img src={`${props.img}.${props.extencion}`} alt="" className={s.image} />
        <h3>{props.name}</h3>
      </div>
  );
};
