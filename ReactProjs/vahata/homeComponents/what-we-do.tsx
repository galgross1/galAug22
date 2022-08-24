import React, { useEffect, useRef, useState } from 'react'
import { ServiceCard } from '@/components/design-components/ServiceCard'
import { useLocale } from '@/lib/hooks'

export default function WhatWeDo({ data }: any) {
  const [isEn, setIsEn] = useState<string>('')
  const cardContainerRef = useRef<HTMLDivElement | null>(null)
  const [xAxis, setXAxis] = useState<number>(355)
  const { dir } = useLocale()

  function changeXAxis() {
    if (window.innerWidth > 500) {
      if (xAxis !== 355) {
        setXAxis(355)
      }
    } else {
      if (xAxis !== 255) {
        setXAxis(255)
      }
    }
  }

  useEffect(() => {
    changeXAxis()
    window.addEventListener('resize', changeXAxis)
  }, [])

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

  const getWhatWeDoCards = () => {
    return data.homepage?.whatWeDoCards?.map(
      (
        card: { imagePath: string; title: string; text: string },
        index: React.Key | null | undefined,
      ) => {
        return (
          <div key={index}>
            <ServiceCard
              imageUrl={card.imagePath}
              title={card.title}
              description={card.text}
            />
          </div>
        )
      },
    )
  }

  function leftOrRight(type: string) {
    if (type === 'left') {
      if (isEn === '') {
        return '/icons/right-button-for-card.svg'
      } else {
        return '/icons/left-button-for-card.svg'
      }
    } else {
      if (isEn === '') {
        return '/icons/left-button-for-card.svg'
      } else {
        return '/icons/right-button-for-card.svg'
      }
    }
  }

  function scrollDirectionForAddXAxis(type: string) {
    if (type === 'left') {
      if (isEn === '') {
        return Math.abs(xAxis)
      } else {
        return -Math.abs(xAxis)
      }
    } else {
      if (isEn === '') {
        return -Math.abs(xAxis)
      } else {
        return Math.abs(xAxis)
      }
    }
  }

  return (
    <>
      <div id={'what'} className={'h-[1450px] lgx:h-[1000px] mt-14'}>
        <div className={'w-full flex justify-center'}>
          <div className={'flex flex-col items-center'}>
            <div
              className={'cursor-default font-normal text-3xl mt-12 text-red'}
            >
              {data.homepage.whatWeDoHeading}
            </div>
            <div
              className={
                'cursor-default hidden xml:block font-bold text-[82px]'
              }
            >
              {data.homepage.whatWeDoTitle}
            </div>
          </div>
        </div>
        <div className={'w-full flex justify-center card-main-container'}>
          <div className={'w-[90vw] flex xml:w-auto relative'}>
            <div
              ref={cardContainerRef}
              className={
                'flex card-container scrollbar-hide py-2 justify-between overflow-auto  xml:overflow-hidden xml:w-auto overflow-y-hidden space-x-5 rtl:space-x-reverse px-3 mt-14'
              }
            >
              {getWhatWeDoCards()}
            </div>
            <div
              className={
                'absolute justify-between mt-64 xml:hidden w-full flex px-2'
              }
            >
              <img
                onClick={() => {
                  // @ts-ignore
                  cardContainerRef?.current?.scrollLeft +=
                    scrollDirectionForAddXAxis('left')
                }}
                className={'cursor-pointer -mx-5'}
                src={leftOrRight('left')}
              />

              <img
                onClick={() => {
                  // @ts-ignore
                  cardContainerRef.current?.scrollLeft +=
                    scrollDirectionForAddXAxis('right')
                }}
                className={'cursor-pointer -mx-5'}
                src={leftOrRight('right')}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
