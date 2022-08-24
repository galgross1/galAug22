interface Props {
    imageUrl: string
    title: string
    description: string
  }
  
  export const ServiceCard = ({ imageUrl, title, description }: Props) => {
    return (
      <>
        <div
          className={
            'flex flex-col w-60 h-card border-2 border-light border-solid sm:w-[338px] rounded-3xl bg-light shadow-4xl'
          }
        >
          <div
            className={
              'bg-contact-bg h-1/2 flex justify-center items-center rounded-t-3xl'
            }
          >
            <img alt={'card-icon'} src={imageUrl} />
          </div>
          <div className={'flex flex-col h-1/2'}>
            <div
              className={
                'cursor-default mx-5 mt-7 font-bold text-3xl text-icon-bg'
              }
            >
              {title}
            </div>
            <div
              className={
                'w-52 sm:w-[297px] h-cardDesc mt-1.5 cursor-default font-normal text-lg mx-5'
              }
            >
              {description}
            </div>
          </div>
        </div>
      </>
    )
  }
  