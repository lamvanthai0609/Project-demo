import React from 'react';

const Input = (props: any) => {
     const { type, placeholder, styles, value, change } = props;
     let style = 'outline-none px-2 py-2 border-solid border-2 border-black ' + styles;
     return <input type={type} className={style} placeholder={placeholder} value={value} onChange={change} />;
};

export default Input;
