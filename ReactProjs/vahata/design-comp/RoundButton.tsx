import React from 'react'

interface Props {
  imageIcon: string
}

export const RoundButton = ({ imageIcon }: Props) => {
  return (
    <>
      <div
        className={
          'h-11 w-11 rounded-full bg-button-footer-bg flex justify-center cursor-pointer items-center'
        }
      >
        <img alt={'image-icon'} src={imageIcon} />
      </div>
    </>
  )
}
