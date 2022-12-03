import React, { useReducer, useMemo } from "react";
import s from "./Collapse.module.scss";
import arrowDown from "../../img/arrowDown.png";

const toggleReducer = (value) => !value;
const Collapse = ({ children, title, alt, show }) => {
  const [isShow, toggle] = useReducer(toggleReducer, !!show);
  const memoColl = useMemo(() => {
    if (isShow)
      return `${s.title} 
      ${s.title__open}`;

    return s.title;
  }, [isShow]);

  return (
    <div className={s.collapse}>
      <div className={memoColl} onClick={toggle}>
        {title}
        <img src={arrowDown} alt={alt} className={s.title__img} />
      </div>
      {isShow && <div className={s.content}>{children}</div>}
    </div>
  );
};
export default Collapse;
