import React, { useEffect, useState } from 'react'
import { ContactUsForm } from '@/components/design-components/ContactUsForm'
import { RoundButton } from '@/components/design-components/RoundButton'
import { useLocale } from '@/lib/hooks'

export default function ContactUs({ data }: any) {
  const [isEn, setIsEn] = useState<string>('')
  const { dir } = useLocale()

  useEffect(() => {
    if (dir === 'ltr') {
      if (isEn === '') {
        setIsEn('-en')
      }
    } else {
      if (isEn === '-en') {
        setIsEn('')
      }
    }
  }, [dir])

  function leftOrRight(type: string) {
    if (type === 'right') {
      if (isEn === '') {
        return '/icons/right-side-circle.svg'
      } else {
        return '/icons/left-side-circle.svg'
      }
    } else {
      if (isEn === '') {
        return '/icons/left-side-circle.svg'
      } else {
        return '/icons/right-side-circle.svg'
      }
    }
  }

  function leftOrRightJustifyCircle(type: string) {
    if (type === 'right') {
      if (isEn === '') {
        return 'justify-start'
      } else {
        return 'justify-end'
      }
    } else {
      if (isEn === '') {
        return 'justify-end'
      } else {
        return 'justify-start'
      }
    }
  }

  return (
    <>
      <div
        className={
          'bg-contact-bg min-h-[680px] relative flex justify-center items-center'
        }
      >
        <div className={'absolute w-full justify-between flex h-full'}>
          <div
            className={
              'flex flex-col h-full ' + leftOrRightJustifyCircle('right')
            }
          >
            <img alt={'right-circle'} src={leftOrRight('right')} />
          </div>
          <div
            className={
              'flex flex-col h-full ' + leftOrRightJustifyCircle('left')
            }
          >
            <img alt={'left-circle'} src={leftOrRight('left')} />
          </div>
        </div>
        <div
          className={
            'absolute flex justify-between flex-col items-center w-fit justify-center mt-[-950px] lgx:w-[1300px] lgx:-mt-64 lgx:flex-row'
          }
        >
          <div id={'contact-text'} className={'flex flex-col mt-80  mb-12  '}>
            <div
              className={
                'w-18 lgx:w-32 h-10 cursor-default rounded-[50px] flex '
              }
            >
              <div
                className={
                  'font-bold text-2xl bg-light w-32 lgx:text-center h-10 rounded-mr text-contact-header cursor-default'
                }
              >
                {data.homepage.contactUsHeading}
              </div>
            </div>
            <div className={'cursor-default h-14 mt-7'}>
              <div
                className={
                  'text-[22px] sm:text-[42px] font-bold cursor-default'
                }
              >
                {data.homepage.contactUsTitle}
              </div>
            </div>
            <div className={'w-0 sm:w-[356px] lgx:w-[479px] mt-3'}>
              <div
                className={'w-64 sm:w-auto font-normal text-xl cursor-default'}
              >
                {data.homepage.contactUsText}
              </div>
            </div>
            <div className={'my-block mt-10'}>
              <div
                className={'flex-col flex lgx:flex-row justify-between mt-4'}
              >
                <a
                  href={`${data.common.contactUsLinks[0].linkType}:${data.common.contactUsLinks[0].linkValue}`}
                  className={'flex cursor-default'}
                >
                  <RoundButton imageIcon={'/icons/phone-icon.svg'} />
                  <div
                    className={
                      'w-32 text-base h-5 font-normal mx-4 cursor-pointer'
                    }
                  >
                    {data.common.contactUsLinks[0].text}
                  </div>
                </a>
                <a
                  href={`${data.common.contactUsLinks[1].linkType}:${data.common.contactUsLinks[1].linkValue}`}
                  className={'flex mt-3.5 lgx:mt-0 cursor-default'}
                >
                  <RoundButton imageIcon={'/icons/phone-icon.svg'} />
                  <div
                    className={
                      'w-36 lgx:w-28 text-base h-5 font-normal mx-4  cursor-pointer'
                    }
                  >
                    {data.common.contactUsLinks[1].text}
                  </div>
                </a>
              </div>
              <div
                className={'flex-col flex lgx:flex-row justify-between mt-4'}
              >
                <a
                  href={`http://maps.google.com/?q=${data.common.contactUsLinks[2].text}`}
                  target={'_blank'}
                  className={'flex cursor-default'}
                  rel="noreferrer"
                >
                  <RoundButton imageIcon={'/icons/location-icon.svg'} />
                  <div
                    className={
                      'w-36 sm:w-60 text-base h-5 font-normal mx-4 mt-0 sm:mt-2 cursor-pointer'
                    }
                  >
                    {data.common.contactUsLinks[2].text}
                  </div>
                </a>
                <a
                  href={`mailto:${data.common.contactUsLinks[3].text}`}
                  className={'flex mt-3.5 lgx:mt-0 cursor-default'}
                >
                  <RoundButton imageIcon={'/icons/email-icon.svg'} />
                  <div
                    className={
                      'w-28 text-base h-5 font-normal mx-4 mt-2.5 cursor-pointer'
                    }
                  >
                    {data.common.contactUsLinks[3].text}
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id={'contact'}>
            <ContactUsForm data={data} />
          </div>
        </div>
      </div>
    </>
  )
}
