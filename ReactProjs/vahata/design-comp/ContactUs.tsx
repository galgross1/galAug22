import { HomePageType } from '@/lib/interface'
import { Button } from '@/components/design-components/Button'
import { useFormik } from 'formik'
import { Input } from '@/components/design-components/Input'

interface Error {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export const ContactUsForm = ({ data }: HomePageType) => {
  const validate = (values: any) => {
    const errors = {} as Error

    if (!values.firstName) {
      errors.firstName = data.common.contactUsFormErrorFirstNameMissing
    }
    if (!values.lastName) {
      errors.lastName = data.common.contactUsFormErrorLastNameMissing
    }

    if (!values.email) {
      errors.email = data.common.contactUsFormErrorEmailMissing
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = data.common.contactUsFormErrorEmailInvalid
    }

    if (!values.phone) {
      errors.phone = data.common.contactUsFormErrorPhoneMissing
    } else if (!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(values.phone)) {
      errors.phone = data.common.contactUsFormErrorPhoneInvalid
    }

    if (!values.message) {
      errors.message = data.common.contactUsFormErrorMessageMissing
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    validate,
    onSubmit: (values, onSubmitProps) => {
      alert(data.common.contactUsFormSuccessMessage)
      onSubmitProps.resetForm()
    },
  })

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className={
          'h-[823px] lgx:h-[700px] w-[290px] xs:w-[300px] sm:-w-[350px] lgx:w-[650px] bg-light rounded-[36px] flex ' +
          'justify-center border-2 border-solid border-light shadow-4xl'
        }
      >
        <div className={'w-[85%] mt-4 lgx:mt-14 flex flex-col'}>
          <div
            className={
              'flex flex-col lgx:flex-row mt-2 lgx:mt-0 justify-between'
            }
          >
            <div className={'flex flex-col'}>
              <div className={'font-bold text-xl cursor-default'}>
                {data.common.contactUsFormFirstName}
              </div>
              <div className={'my-input-contact'}>
                <Input
                  handlerBlur={formik.handleBlur}
                  handlerChange={formik.handleChange}
                  value={formik.values.firstName}
                  name={'firstName'}
                  type={'text'}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className={'text-red'}>{formik.errors.firstName}</div>
                ) : null}
              </div>
            </div>
            <div className={'flex flex-col'}>
              <div className={'font-bold text-xl cursor-default'}>
                {data.common.contactUsFormLastName}
              </div>
              <div className={'my-input-contact'}>
                <Input
                  handlerBlur={formik.handleBlur}
                  handlerChange={formik.handleChange}
                  value={formik.values.lastName}
                  name={'lastName'}
                  type={'text'}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className={'text-red'}>{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col lgx:flex-row mt-2 lgx:mt-0 flex justify-between mt-6'
            }
          >
            <div className={'flex flex-col'}>
              <div className={'font-bold text-xl cursor-default'}>
                {data.common.contactUsFormEmail}
              </div>
              <div className={'my-input-contact'}>
                <Input
                  handlerBlur={formik.handleBlur}
                  handlerChange={formik.handleChange}
                  value={formik.values.email}
                  name={'email'}
                  type={'email'}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={'text-red'}>{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className={'flex flex-col'}>
              <div className={'font-bold text-xl cursor-default'}>
                {data.common.contactUsFormPhone}
              </div>
              <div className={'my-input-contact'}>
                <Input
                  handlerBlur={formik.handleBlur}
                  handlerChange={formik.handleChange}
                  value={formik.values.phone}
                  name={'phone'}
                  type={'tel'}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className={'text-red'}>{formik.errors.phone}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className={'row flex mt-8'}>
            <div className={'flex flex-col'}>
              <div className={'font-bold text-xl cursor-default'}>
                {data.common.contactUsFormMessage}
              </div>
              <div className={'my-text-area-contact'}>
                <textarea
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  name={'message'}
                  className={
                    'h-[90px] w-[250px] mt-1 lgx:h-[145px] lgx:w-[550px] rounded-lg bg-light' +
                    ' border-1 border-solid border-light shadow-4xl resize-none lgx:mt-3.5'
                  }
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className={'text-red'}>{formik.errors.message}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className={'mt-2.5 lgx:mt-5'}>
            <Button
              text={data.common.contactUsFormSendButton}
              type={'big'}
              isSubmit={true}
            />
          </div>
        </div>
      </form>
    </>
  )
}
