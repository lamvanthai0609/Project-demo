interface IProps {
     href?: string;
     to?: string;
     onclick?: () => void;
     text: any;
     styles: string;
}

export const Button = (props: IProps) => {
     return (
          <button className={props.styles} {...props} onClick={props.onclick}>
               {props.text}
          </button>
     );
};
