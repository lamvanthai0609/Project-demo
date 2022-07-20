import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ heft, to, text, styles, ...passprops }: any) => {
     const props = {
          ...passprops,
     };
     let Card: any = 'button';
     if (to) {
          props.to = to;
          Card = Link;
     } else if (heft) {
          props.herf = heft;
          Card = 'a';
     }

     return (
          <Card className={styles} {...props}>
               {text}
          </Card>
     );
};

export default Button;
