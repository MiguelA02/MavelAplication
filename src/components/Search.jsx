import React from "react";
import s from "../Styles/Search.module.css";
import logo from "../images/Marvelimg.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as actions from '../redux/actions'
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setInput({name: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.getCharacter(input.name))
    setInput({name: ''})
  }
  return (
    <div className={s.container}>
      <img src={logo} alt="" srcset="" />

      <form onSubmit={handleSubmit}>
        <input type="text" name = 'name' className={s.input} onChange={handleChange} value = {input.name}  />
        <button type='submit' className={s.btn} onClick={()=>navigate(`/character/${input.name}`)}>Buscar</button>
      </form>

    </div>
  );
};
