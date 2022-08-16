import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input}/> {/*we can drop 'props.input.id' cause the ...props.input is do the job but i kept that*/}
    </div>
  );
};

export default Input;
