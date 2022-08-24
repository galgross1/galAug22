
interface Props {
    handlerBlur: any
    handlerChange: any
    value: string
    name: string
    type: string
  }
  
  export const Input = ({
    handlerBlur,
    handlerChange,
    value,
    name,
    type,
  }: Props) => {
    return (
      <input
        onBlur={handlerBlur}
        onChange={handlerChange}
        value={value}
        name={name}
        className={
          'h-14 w-[250px] rounded-lg border-1 border-solid border-light shadow-4xl outline-none bg-light mt-3.5'
        }
        type={type}
      />
    )
  }
  