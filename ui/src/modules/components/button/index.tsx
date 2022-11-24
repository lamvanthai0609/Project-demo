interface IProps {
     href?: string;
     to?: string;
     onClick?: () => void;
     text: any;
     styles: string;
}

export const Button = (props: IProps) => {
     return (
          <button className={props.styles} {...props} onClick={props.onClick}>
               {props.text}
          </button>
     );
};
