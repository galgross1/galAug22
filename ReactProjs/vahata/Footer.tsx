import { ButtonForFooter } from '@/components/design-components/ButtonForFooter'
import { useLocale } from '@/lib/hooks'

export default function Footer({ data }: any) {
  const { dir } = useLocale()

  return (
    <>
      <footer
        id={'footer'}
        className="bg-light h-[671px] lgx:h-96 flex justify-center items-center"
      >
        <div
          className={
            'flex flex-col  lgmx:w-3/5 lgmx:flex-row lgmx:justify-between items-center'
          }
        >
          <div>
            <img
              className={'w-96 h-40 mt-16 lgmx:-mt-36'}
              alt={'logo'}
              src={'/image/BigLogo.svg'}
            />
          </div>
          <div className={'mt-10 lgmx:-mt-32 flex flex-col'}>
            <ButtonForFooter text={data.common.footerScheduleButton} />
            <div className={'mt-2.5'}>
              <ButtonForFooter text={data.common.footerSupportUsButton} />
            </div>
          </div>
          <div
            className={`hidden xl:flex flex-col ${
              dir === 'ltr' ? '-mt-36' : '-mt-28'
            }`}
          >
            <div className={'text-xl font-bold cursor-default -mt-0.5'}>
              {data.common.footerMenuTitle}
            </div>
            <a
              href={'#about'}
              className={'font-normal mt-2 text-lg cursor-pointer'}
            >
              {data.homepage.aboutHeading}
            </a>
            <a
              href={'#contact'}
              className={'font-normal mt-2 text-lg cursor-pointer'}
            >
              {data.common.footerContactUsTitle}
            </a>
            <div className={'font-normal  text-lg mt-2 cursor-pointer'}>
              {data.common.footerSupportUsButton}
            </div>
          </div>
          <div className={'mt-12 mb-28 lgmx:mb-0 lgmx:-mt-20 w-72'}>
            <div className={'text-xl font-bold cursor-default'}>
              {data.common.footerContactUsTitle}
            </div>
            <a
              href={`${data.common.contactUsLinks[0].linkType}:${data.common.contactUsLinks[0].linkValue}`}
              className={'flex mt-1.5 mx-0.5 cursor-default'}
            >
              <img
                className={'mt-2.5 cursor-pointer'}
                src={'/icons/phone-purple-icon.svg'}
              />
              <div className={'flex flex-col mt-3 mr-3 ml-3'}>
                <div
                  className={'cursor-pointer'}
                  onClick={() => {
                    window.open(
                      `${data.common.contactUsLinks[0].linkType}:${data.common.contactUsLinks[0].linkValue}`,
                      '_self',
                    )
                  }}
                >
                  {data.common.contactUsLinks[0].text}
                </div>
                <div
                  className={'cursor-pointer'}
                  onClick={() => {
                    window.open(
                      `${data.common.contactUsLinks[1].linkType}:${data.common.contactUsLinks[1].linkValue}`,
                      '_self',
                    )
                  }}
                >
                  {data.common.contactUsLinks[1].text}
                </div>
              </div>
            </a>
            <a
              href={`mailto:${data.common.contactUsLinks[3].text}`}
              className={'flex mt-1.5 cursor-default'}
            >
              <img
                className={'mt-2.5 cursor-pointer'}
                alt={'email'}
                src={'/icons/email-purple.svg'}
              />
              <div className={'flex flex-col mt-2 mr-3 ml-3'}>
                <div className={'w-32 cursor-pointer'}>
                  {data.common.contactUsLinks[3].text}
                </div>
              </div>
            </a>
            <a
              href={`http://maps.google.com/?q=${data.common.contactUsLinks[2].text}`}
              target={'_blank'}
              className={'flex mt-1.5 mx-1.5 cursor-default'}
              rel="noreferrer"
            >
              <img
                className={'mt-2.5 cursor-pointer'}
                alt={'location'}
                src={'/icons/location-purple.svg'}
              />
              <div className={'flex flex-col mt-2 mr-3 ml-3'}>
                <div className={'cursor-pointer'}>
                  {data.common.contactUsLinks[2].text}
                </div>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
