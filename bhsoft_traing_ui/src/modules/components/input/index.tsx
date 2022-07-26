export const Input = (props: any) => {
     const { type, placeholder, styles, value, change } = props;
     return (
          <input
               type={type}
               className={`outline-none px-2 py-2 border-solid border-2 border-black ${styles}`}
               placeholder={placeholder}
               value={value}
               onChange={change}
          />
     );
};
