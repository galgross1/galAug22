interface Props {
    text: string
  }
  
  export const ButtonForFooter = ({ text }: Props) => {
    return (
      <>
        <button
          className={
            'h-12 w-32 rounded-[34px] text-button-footer-bg border-2 border-solid border-button-footer-bg'
          }
        >
          {text}
        </button>
      </>
    )
  }
  