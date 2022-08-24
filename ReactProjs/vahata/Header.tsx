import { useLocale } from '@/lib/hooks'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

export default function Header({ data }: any) {
  const { dir } = useLocale()

  const ulRef = useRef<HTMLUListElement | null>(null)
  const [isMenu, setIsMenu] = useState<boolean>(true)
  const router = useRouter()

  function hrefForContactUs() {
    if (window?.innerWidth <= 1340) {
      router.push('#contact-text').then()
    } else {
      if (window?.innerWidth >= 1341) {
        router.push('#contact').then()
      }
    }
  }

  const addOrRemoveClassForDropDown = (type: string) => {
    if (type === 'add') {
      ulRef.current?.classList.add('top-[80px]')
      ulRef.current?.classList.remove('flex')
      ulRef.current?.classList.add('contents')
      ulRef.current?.classList.add('opacity-100')
    } else {
      ulRef.current?.classList.remove('top-[80px]')
      ulRef.current?.classList.add('flex')
      ulRef.current?.classList.remove('contents')
      ulRef.current?.classList.remove('opacity-100')
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (isMenu && window.innerWidth >= 768) {
        addOrRemoveClassForDropDown('remove')
        setIsMenu(true)
      }
    })

    document.addEventListener('click', (event) => {
      // @ts-ignore
      const searchPanel = event?.target?.closest('.my-nav-net')
      if (!searchPanel) {
        addOrRemoveClassForDropDown('remove')
        setIsMenu(true)
      }
    })

    window.addEventListener('scroll', () => {
      if (isMenu) {
        addOrRemoveClassForDropDown('remove')
        setIsMenu(true)
      }
    })
  }, [])

  const openMenu = (e: React.MouseEvent<HTMLImageElement>): void => {
    if (isMenu) {
      addOrRemoveClassForDropDown('add')
      setIsMenu(false)
    } else {
      addOrRemoveClassForDropDown('remove')
      setIsMenu(true)
    }
  }

  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="w-screen h-header z-10 pt-4 px-4">
        <nav
          className={
            'my-nav-net bg-light  md:flex mx-auto md:items-center gap-x-6  max-w-screen-lg rounded-lg  md:p-1'
          }
        >
          <div className={' flex justify-between items-center mx-2'}>
            <Logo />
            <span className={'text-3xl cursor-pointer md:hidden block'}>
              <img
                id={'menu'}
                alt={'iphone-nav-icon'}
                onClick={(e) => openMenu(e)}
                src={'/image/iphone-nav-icon.svg'}
              />
            </span>
          </div>
          <ul
            ref={ulRef}
            className="md:flex justify-end md:items-center z-[-1] md:z-auto
                md:static absolute
                bg-light  w-full left-0 md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all
                ease-in duration-500 justify-between "
          >
            <div
              className={
                'flex justify-center items-center md:justify-start md:items-start'
              }
            >
              <div className={'flex space-x-5 rtl:space-x-reverse px-3'}>
                <li className={'cursor-pointer'}>
                  {data.common.appLinks[0].text}
                </li>
                <li className={'cursor-pointer'}>
                  <a href={'#about'}>{data.common.appLinks[1].text}</a>
                </li>
                <li className={'cursor-pointer'}>
                  <div onClick={hrefForContactUs}>
                    {data.common.appLinks[2].text}
                  </div>
                </li>
                <li className={'cursor-pointer'}>
                  <a href={'#footer'}>{data.common.appLinks[3].text}</a>
                </li>
              </div>
            </div>

            <div
              className={
                'flex justify-around space-x-2 rtl:space-x-reverse px-3'
              }
            >
              <li className={'flex my-6 md:my-0 cursor-pointer'}>
                <ChangeLangButton className="" lang="ar" />
              </li>
              <li className={'flex my-6 md:my-0 cursor-pointer'}>
                <ChangeLangButton className="" lang="he" />
              </li>
              <li className={'flex my-6 md:my-0 cursor-pointer'}>
                <ChangeLangButton className="" lang="en" />
              </li>
              <li className={'flex my-6 md:my-0 cursor-pointer'}>
                <ChangeLangButton className="" lang="am" />
              </li>
              <li className={'flex my-6 md:my-0 cursor-pointer'}>
                <ChangeLangButton className="" lang="ti" />
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  )
}

const Logo = () => {
  return (
    <Link href={'/'}>
      <img alt={'logo'} src="image/Logo.svg" />
    </Link>
  )
}
