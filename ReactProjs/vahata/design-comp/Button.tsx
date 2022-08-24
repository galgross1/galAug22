import { useLocale } from '@/lib/hooks'
import { useRouter } from 'next/router'

interface Props {
  text: string
  type: string
  href?: any
  isSubmit?: any
}

export const Button = ({ text, type, href, isSubmit }: Props) => {
  const { dir } = useLocale()
  const router = useRouter()

  function getClass() {
    if (type === 'big') {
      if (dir === 'rtl') {
        return 'text-3xl'
      } else {
        return 'text-xl'
      }
    } else {
      return 'text-xl'
    }
  }

  function checkIfSubmit() {
    if (isSubmit) {
      return 'submit'
    } else {
      return 'button'
    }
  }

  return (
    <>
      <button
        type={checkIfSubmit()}
        onClick={() => {
          if ((href !== null && href) || undefined) {
            router.push(href).then()
          }
        }}
        className={
          'z-[5] cursor-pointer bg-button-footer-bg h-[60px] w-[185px] rounded-mr flex justify-center items-center'
        }
      >
        <div className={' text-center text-light font-bold ' + getClass()}>
          {text}
        </div>
      </button>
    </>
  )
}
