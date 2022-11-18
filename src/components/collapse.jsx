import React, { useReducer, useState } from 'react';
import s from './Collapse.module.scss';
import arrowDown from "../img/arrowDown.png";


const toggleReducer = (value) => !value;
const Collapse = ({ children, title, show }) => {
  const [isShow, toggle] = useReducer(toggleReducer, !!show);

  return (
    <div className={s.root}>
      <div className={s.title} onClick={toggle}>
        {title} 
        <img src={arrowDown} alt="" className={s.title__img} />
      </div>
      {isShow && <div className={s.content}>{children}</div>}
    </div>
  );
};
export default Collapse;


