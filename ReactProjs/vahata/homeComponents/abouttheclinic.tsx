import React from 'react'
import { Button } from '@/components/design-components/Button'

export default function AboutTheClinic({ data }: any) {
  return (
    <>
      <div className={'w-full flex items-center'}>
        <div
          id={'about'}
          className={
            ' w-full overflow-hidden flex justify-around flex-col items-center xml:flex-row px-2'
          }
        >
          <div
            className={
              'flex mt-12 xml:mt-32 w-72 h-72 md:w-[702px] md:h-[628px]'
            }
          >
            <img alt={'about'} src={'/image/about-image.png'} />
          </div>
          <div
            className={
              'px-2 mt-20 xml:mt-32 items-center md:w-[702px] w-72 xml:w-1/3'
            }
          >
            <div
              className={
                'font-normal text-2xl cursor-default text-blueContactUsHeader'
              }
            >
              {data.homepage.aboutHeading}
            </div>
            <div
              className={
                'text-[30px] smx:text-[52px] font-bold mt-3 cursor-default'
              }
            >
              <div className={'w-52 smx:w-96 md:w-auto'}>
                {data.homepage.aboutTitle}
              </div>
            </div>
            <div className={'font-normal text-lg mt-12 cursor-default  w-full'}>
              {data.homepage.aboutUsText}
            </div>
            <div className={'mt-9 z-[5]'}>
              <Button
                text={data.homepage.aboutUsButton}
                type={'small'}
                href={'#what'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
