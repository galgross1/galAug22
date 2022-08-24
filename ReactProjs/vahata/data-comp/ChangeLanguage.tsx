/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'

export const ChangeLangButton = ({
  lang,
}: {
  className?: string
  children?: React.ReactNode
  lang: string
}) => {
  const router = useRouter()
  const changeLocale = (lang: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: lang })
  }

  const checkCountry = () => {
    switch (lang) {
      case 'ar':
        return '/image/sau.svg'
      case 'he':
        return '/image/he.svg'
      case 'en':
        return '/image/en.png'
      case 'am':
        return '/image/am.svg'
      case 'ti':
        return '/image/ti.png'
      default:
        return lang
    }
  }

  return (
    <div>
      <img src={checkCountry()} onClick={() => changeLocale(lang)} />
    </div>
  )
}
