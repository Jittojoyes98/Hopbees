import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import * as yup from 'yup'
import { useFormik } from 'formik'

const LoginPage = () => {
  const emailValidationSchema = yup.object({
    email: yup
      .string()
      .required('Email is required')
      .email('Enter a valid mail'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: emailValidationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div className="d-flex justify-content-center  align-items-center login-page">
      <div className="w-30 pt-8">
        <h1>Welcome to Hopbees !</h1>
        <p>
          Connect with our community of mentors and students to increase your
          love for your hobbies.
        </p>
        <div className="d-flex flex-column gap-3 mt-5 mb-5">
          <Button className="login-buttons google-button">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="6" fill="white"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.5991 16.2271C25.5991 15.5179 25.5355 14.836 25.4173 14.1814H15.998V18.05H21.3805C21.1486 19.3002 20.444 20.3594 19.3848 21.0685V23.5779H22.617C24.5081 21.8368 25.5991 19.2729 25.5991 16.2271Z"
                fill="#4285F4"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9999 26.0008C18.7002 26.0008 20.9641 25.1053 22.6188 23.5778L19.3866 21.0684C18.4911 21.6685 17.3455 22.0231 15.9999 22.0231C13.395 22.0231 11.1902 20.2638 10.4038 17.8999H7.0625V20.4911C8.70814 23.7597 12.0903 26.0008 15.9999 26.0008Z"
                fill="#34A853"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.4031 17.9002C10.2031 17.3001 10.0894 16.6591 10.0894 16C10.0894 15.3408 10.2031 14.6998 10.4031 14.0997V11.5085H7.0618C6.38445 12.8587 5.99805 14.3861 5.99805 16C5.99805 17.6138 6.38445 19.1412 7.0618 20.4914L10.4031 17.9002Z"
                fill="#FBBC05"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9999 9.9765C17.4682 9.9765 18.7866 10.4811 19.823 11.4721L22.6915 8.60362C20.9595 6.9898 18.6956 5.99878 15.9999 5.99878C12.0903 5.99878 8.70814 8.23994 7.0625 11.5085L10.4038 14.0997C11.1902 11.7358 13.395 9.9765 15.9999 9.9765Z"
                fill="#EA4335"
              ></path>
            </svg>
            <span className="fw-semibold ms-2_5">Continue with Google</span>
          </Button>
          <Button className="login-buttons linkedin-button">
            <svg
              fill="none"
              width="33"
              height="32"
              viewBox="0 0 25 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.68 0.920013H3.32001C1.99521 0.920013 0.920013 1.99521 0.920013 3.32001V18.68C0.920013 20.0048 1.99521 21.08 3.32001 21.08H18.68C20.0048 21.08 21.08 20.0048 21.08 18.68V3.32001C21.08 1.99521 20.0048 0.920013 18.68 0.920013ZM7.16001 8.60001V17.72H4.28001V8.60001H7.16001ZM4.28001 5.94561C4.28001 5.27361 4.85601 4.76001 5.72001 4.76001C6.58401 4.76001 7.12641 5.27361 7.16001 5.94561C7.16001 6.61761 6.62241 7.16001 5.72001 7.16001C4.85601 7.16001 4.28001 6.61761 4.28001 5.94561ZM17.72 17.72H14.84C14.84 17.72 14.84 13.2752 14.84 12.92C14.84 11.96 14.36 11 13.16 10.9808H13.1216C11.96 10.9808 11.48 11.9696 11.48 12.92C11.48 13.3568 11.48 17.72 11.48 17.72H8.60001V8.60001H11.48V9.82881C11.48 9.82881 12.4064 8.60001 14.2688 8.60001C16.1744 8.60001 17.72 9.91041 17.72 12.5648V17.72Z"
                fill="white"
              ></path>
            </svg>
            <span className="fw-semibold ms-2_5">Continue with LinkedIn</span>
          </Button>
        </div>
        <div className="or-line">
          <p className="my-0 px-2 or-text">OR</p>
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <p>Email address</p>
            <input
              type="text"
              placeholder="Your email address"
              name="email"
              className="d-block mb-3 input-field"
              title="Your email address"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="validation-error-text">{formik.errors.email}</p>
            )}
            <Button
              type="submit"
              disabled={!formik.isValid}
              variant="secondary"
              className={`mt-3 w-100 login-buttons fw-semibold ${
                !formik.isValid ? 'submit-inactive' : 'submit-active'
              }`}
            >
              Continue with email
            </Button>
            <div className="text-center mt-2">
              <p className="text-light">
                By continuing, you agree to the Terms of use, Privacy Policy,
                and Community Standards of Hopbees.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
