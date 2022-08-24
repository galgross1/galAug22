import React from 'react'
import { Button } from '@/components/design-components/Button'

export default function Banner({ data }: any) {
  const splitSentence = data.homepage.title.split('-')

  return (
    <div id="top-header">
      <div className="h-banner relative overflow-hidden -mt-24">
        <div className={'absolute hidden lgx:block xxl:hidden'}>
          <img src={'/image/image-for-banner.png'} />
        </div>
        <div className="background absolute z-[-1] inset-0"></div>
        <div
          className={
            'flex flex-wrap h-full flex-col justify-center items-center'
          }
        >
          <div
            className={
              'flex flex-shrink cursor-default font-body font-bold text-lg xml:text-7xl md:text-4xl'
            }
          >
            {splitSentence[0] + ' - '}
          </div>
          <div
            className={
              'flex flex-shrink cursor-default font-body font-bold text-lg xml:text-7xl md:text-4xl'
            }
          >
            {splitSentence[1]}
          </div>
          <div
            className={
              'flex flex-shrink text-center font-body text-sm md:text-[22px] xml:text-[24px] mt-5 px-1'
            }
          >
            {data.homepage.description}
          </div>
          <div className={'mt-24 z-[5]'}>
            <Button
              text={data.homepage.getToKnowUsButton}
              type={'big'}
              href={'#about'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
